import React, { Component } from 'react';
import { StyledNote } from './styles';
import { CREATE_NOTE } from '../../query'
import { Mutation } from 'react-apollo'

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            author: '',
            place: '',
            isUpdate: '',
            stateChange: true,
        }
    }

    displayAlert = (res) => {
        window.alert("Note Added Successfully", res);
    }

    handleSubmit = () => {
        this.setState(state => ({
            title: '',
            content: '',
            author: '',
            place: '',
        }));
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value , stateChange:false});
    }

    handleReset = () => {
        this.setState({
            title: '',
            content: '',
            author: '',
            place: ''
        });
    }

    onKeyUp = (target, event) => {
        if (event.keyCode === 13) {
            switch (target) {
                case 'title': this.content.focus();
                break;
                case 'content': this.author.focus();
                break;
                case 'author': this.place.focus();
                break;
                case 'place': this.submit.focus();
                break;
                default: return null;
            }
        }
    }

    render() {
        const state = this.props.location.state;
        const { title, content, author, place } = this.state;
        const { isUpdate = false } = this.props.location.state || {};
        const submitButtonText = isUpdate ? "Update Note" : "Submit Note";
        return (
            <StyledNote>
                <div className="note">
                    Title: <input
                        style={{ marginLeft: "55px" }}
                        placeholder="Enter note title"
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        ref={(input) => { this.title = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'title')}
                    /><br />
                    Content: <input
                        placeholder="Enter note content"
                        type="text"
                        name="content"
                        onChange={this.handleChange}
                        value={this.state.content}
                        ref={(input) => { this.content = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'content')}
                    /><br />
                    Author: <input
                        style={{ marginLeft: "40px" }}
                        placeholder="Enter note author"
                        type="text"
                        name="author"
                        onChange={this.handleChange}
                        value={this.state.author}
                        ref={(input) => { this.author = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'author')}
                    /><br />
                    Place: <input
                        style={{ marginLeft: "50px" }}
                        placeholder="Enter note place"
                        type="text"
                        name="place"
                        onChange={this.handleChange}
                        value={this.state.place}
                        ref={(input) => { this.place = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'place')}
                    /><br />
                    <Mutation mutation={CREATE_NOTE}>{
                        createNote => (
                            <button type="button"
                                className="submit-btn"
                                ref={(input) => { this.submit = input }}
                                onKeyUp={this.onKeyUp.bind(this, 'submit')}
                                disabled={!(title && content && author && place)}
                                onClick={() => {
                                    this.handleSubmit();
                                    createNote({ variables: { title, content, author, place } })
                                        .then(res => console.log("hellloooooooooo---------",res))
                                        .catch(err => console.log("Error", err))
                                }}>{submitButtonText}</button>
                        )
                    }
                    </Mutation>
                    <button
                        className="reset-btn"
                        type="button"
                        onClick={this.handleReset}
                        disabled={!(title || content || author || place)}
                    >Reset</button>
                </div>
            </StyledNote>
        );
    }
}

export default CreateNote;