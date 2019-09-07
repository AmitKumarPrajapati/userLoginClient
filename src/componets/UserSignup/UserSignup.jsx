import React, { Component } from 'react';
import { StyledUserSignup } from './styles';
import { CREATE_USER } from '../../query'
import { Mutation } from 'react-apollo'


class UserSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            age: '',
            password: '',
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.stateChange && nextProps.location.state.note !== prevState){
    //       return nextProps.location.state.note;
    //     }
    //     return null;
    // }

    displayAlert = (res) => {
        window.alert("Note Added Successfully", res);
    }

    handleSubmit = () => {
        this.setState(state => ({
            name: '',
            email: '',
            age: '',
            password: '',
        }));
    }

    handleChange = (evt) => {
        console.log("Hellooooooo",evt.target.value)
        this.setState({ [evt.target.name]: evt.target.value , stateChange:false});
        // this.setState({stateChange: false});
    }

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            age: '',
            password: '',
        });
    }

    onKeyUp = (target, event) => {
        if (event.keyCode === 13) {
            switch (target) {
                case 'name': this.age.focus();
                break;
                case 'email': this.password.focus();
                break;
                case 'age': this.email.focus();
                break;
                case 'password': this.submit.focus();
                break;
                default: return null;
            }
        }
    }

    render() {
        const state = this.props.location.state;
        const { name, age, email, password} = this.state;
        const { isUpdate = false } = this.props.location.state || {};
        const submitButtonText = isUpdate ? "Update User" : "Create Note";
        return (
            <StyledUserSignup>
                <div className="note">
                    Name: <input
                        style={{ marginLeft: "50px" }}
                        placeholder="Enter User Name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        ref={(input) => { this.name = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'name')}
                    /><br />
                    Age: <input
                        style={{marginLeft:"60px"}}
                        placeholder="Enter User Age"
                        type="text"
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.age}
                        ref={(input) => { this.age = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'age')}
                    /><br />
                    Email: <input
                        style={{ marginLeft: "50px" }}
                        placeholder="Enter User Email"
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        ref={(input) => { this.email = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'email')}
                    /><br />
                    Password: <input
                        style={{ marginLeft: "20px" }}
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        ref={(input) => { this.password= input }}
                        onKeyUp={this.onKeyUp.bind(this, 'password')}
                    /><br />
                    <Mutation mutation={CREATE_USER}>{
                        createUser=> (
                            <button type="button"
                                className="submit-btn"
                                ref={(input) => { this.submit = input }}
                                onKeyUp={this.onKeyUp.bind(this, 'submit')}
                                disabled={!(name && age && email && password)}
                                onClick={() => {
                                    this.handleSubmit();
                                    createUser({ variables: { name, age, email, password} })
                                        .then(res => console.log("hello----->>>>>>>>>>>",res))
                                        .catch(err => console.log("Error", err))
                                }}>Create User</button>
                        )
                    }
                    </Mutation>
                    <button
                        className="reset-btn"
                        type="button"
                        onClick={this.handleReset}
                        disabled={!(name || age || email || password)}
                    >Reset</button>
                </div>
            </StyledUserSignup>
        );
    }
}

export default UserSignup;