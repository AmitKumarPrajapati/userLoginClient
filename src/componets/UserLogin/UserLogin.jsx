import React, { Component } from "react";
import { StyledUserLogin } from "./styles";
import { Query } from "react-apollo";
import { USER_LOGIN } from "../../query";
import { Mutation } from 'react-apollo'


export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }
  handleUserName = event => {
    this.setState({ name: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    this.setState(state => ({
        name: '',
        password: '',
    }));
}

userLoginSuccess = res => {
    console.log("login user", res)
    console.log(res.status)
    // const { userName, password } = this.state;
    if(res.status === 200){
      console.log("User login successfully");
    }
    console.log("Please enter correct user name & password");
}
  

  render() {
    const {name,password} = this.state;    
    console.log("Hello---------------->>>>",name);
    console.log("Hello------------->>>>>>>>>.",password);  
            return (
              <StyledUserLogin>
                <div className="note">
                  Username: <input type="text" onChange={this.handleUserName} />{" "}
                  <br />
                  Password:{" "}
                  <input type="password" onChange={this.handlePassword} />{" "}
                  <br />
                  <div style={{ marginLeft: "100px" }}>
                  <Mutation mutation={USER_LOGIN}>{
                        userLogin => (
                            <button type="button"
                                className="submit-btn"
                                ref={(input) => { this.login = input }}
                                disabled={!(name && password)}
                                onClick={() => {
                                    userLogin({ variables: { name, password } })
                                        .then(res => this.userLoginSuccess(res))
                                        .catch(err => console.log("Error", err))
                                }
                              }>Login</button>
                        )
                    }
                    </Mutation>
                    <button className="forget-btn" type="button">
                      Forget Password
                    </button>
                  </div>
                </div>
              </StyledUserLogin>
        );
    }
}

