import React, { Component } from "react";
import { Query } from "react-apollo";
import {GET_BOOKS,DELETE_NOTE} from "../../query";
import { StyledTable } from "./styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Mutation } from 'react-apollo'


class ViewAllNotes extends Component {
  constructor(props){
    super(props);
    this.state = {id : ''};
  }

  render() {
    return (
      <Query query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;
          console.log(data.getNotes);
          console.log(data);
          if (data) {
            return (
              <React.Fragment>
                <StyledTable>
                  <table className="table">
                    <tr>
                      <th>Title</th>
                      <th>Content</th>
                      <th>Author</th>
                      <th>Place</th>
                      <th>Action</th>
                    </tr>
                    {data.getNotes.map(note => (
                      <>
                        <tr>
                          <td>{note.title}</td>
                          <td>{note.content}</td>
                          <td>{note.author}</td>
                          <td>{note.place}</td>
                          <td>
                            <Link className="action" to={{pathname:'/createNote',state:{ note, isUpdate: true}}}>Edit</Link>
                            <Mutation mutation={DELETE_NOTE}>{
                              deleteNote => (
                              <button type="button"
                                className="submit-btn"
                                onClick={() => {
                                    let _id = note._id;
                                    deleteNote({variables:{_id}})
                                        .then(res => console.log("Hello",res))
                                        .catch(err => console.log("Error", err))
                                }}>Delete</button>
                        )
                    }
                    </Mutation>
                          </td>
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

export default ViewAllNotes;
