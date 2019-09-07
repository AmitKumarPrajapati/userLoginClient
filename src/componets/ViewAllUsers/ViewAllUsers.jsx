import React, { Component } from "react";
import { Query } from "react-apollo";
import {GET_USERS} from "../../query";
import { StyledTable } from "./styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewAllUsers extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;
          console.log("Hellooooooooooooooooo------------->>>>>>>>>",data);
          if (data) {
            return (
              <React.Fragment>
                <StyledTable>
                  <table className="table">
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                    </tr>
                    {data.getUsers.map(user => (
                      <>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.age}</td>
                          <td>{user.email}</td>
                        </tr>
                      </>
                    ))}
                  </table>
                </StyledTable>
              </React.Fragment>
            );
          }
        }}
      </Query>
    );
  }
}

export default ViewAllUsers;
