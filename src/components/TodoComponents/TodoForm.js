import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitItem = event => {
        event.preventDefault();        
        this.props.addItem(this.state.item);
        this.state.item = '';
    };
 

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input type='text' value={this.state.item} name='item' onChange={this.handleChange} />
                <button className='add-button' type='submit'>Add Item</button>                
            </form>
        );
    }
    
}

export default TodoForm;


