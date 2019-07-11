import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    handleSubmit = event => {
        this.setState({ text: event.target.value });
    };

    handleTodo = () => {
        const { text } = this.state;
        const newItem = { text, completed: false, id: Date.now() };
        this.props.addTodo(newItem);
        this.setState({ text: '' });
    };
    render() {
        return (
            <div>
                <input
                   onChange = { this.handleSubmit }
                   placeholder = 'Add Todo'
                   value = { this.state.text }
                />
                <button type = 'submit' onClick = { this.handleTodo }>
                    Add To List
                </button>
                <button type = 'delete' onClick = { this.handleSubmit }>
                    submit
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);