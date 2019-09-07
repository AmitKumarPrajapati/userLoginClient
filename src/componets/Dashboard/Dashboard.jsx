import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import CreateNote from "../CreateNote/CreateNote";
import { ViewAllNotes } from "../ViewAllNotes";
import { StyledDashboard } from "./styles";
import { Home } from "../Home";
import { UserSignup }  from '../UserSignup';
import { UserLogin } from '../UserLogin';
import {ViewAllUsers} from '../ViewAllUsers';
class Dashboard extends Component {
  render() {
    return (
      <Router>
        <StyledDashboard>
          <div className="container">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/createNote">Create Note</Link>
            </li>
            <li className="link">
              <Link to="/viewNotes">View All Notes</Link>
            </li>
            <li className="link">
              <Link to="/signup">Add User</Link>
            </li>
            <li className="link">
              <Link to="/login">Login User</Link>
            </li>
            <li className="link">
              <Link to="/viewUsers">View All Users</Link>
            </li>
          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/createNote" exact component={CreateNote} />
            <Route path="/viewNotes" exact component={ViewAllNotes} />
            <Route path="/signup" exact component={UserSignup} />
            <Route path="/login" exact component={UserLogin} />
            <Route path="/viewUsers" exact component={ViewAllUsers} />
          </div>
        </StyledDashboard>
      </Router>
    );
  }
}

export default Dashboard;
