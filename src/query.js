import gql from "graphql-tag";

/* Query for Get list of books*/

const GET_BOOKS = gql`{
    getNotes {
        _id
        title
        content
        author
        place
    }
}`;

/* Query for get list of users */

const GET_USERS = gql`{
    getUsers {
        name
        age
        email
        password
    }
}`;

/* Mutation for user login */

const USER_LOGIN = gql`
    mutation userLogin($name: String!,$password: String!){
        userLogin(
        name: $name,
        password: $password
    ){
        name
        password
    }
        
}`;

/* Mutation for Create new note */

const CREATE_NOTE = gql`
  mutation createNote(
      $title: String!,
      $content: String!,
      $author: String!,
      $place: String!,) {
    createNote(
        title: $title,
        content: $content,
        author: $author,
        place: $place,
    ){
        title
        content
        author
        place
    }
}`;

/* Muation for delete a note */

const DELETE_NOTE = gql`
    mutation deleteNote($_id:String!){
        deleteNote(
            _id: $_id
        ){
            _id
        }
    }
`;

/* Mutation for create a new user */

const CREATE_USER = gql`
  mutation createUser(
      $name: String!,
      $age: String!,
      $email: String!,
      $password: String!,) {
    createUser(
        name: $name,
        age: $age,
        email: $email,
        password: $password,
    ){
        name
        age
        email
        password
    }
  }`;

export { GET_BOOKS,CREATE_NOTE, CREATE_USER, GET_USERS, DELETE_NOTE, USER_LOGIN };