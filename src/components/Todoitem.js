import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () =>{
        return{
            backgroundColor:'#f4f4f4',
            padding:'15px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

  
    render() {
        const {id, title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange = {this.props.markComplete.bind(this, id)}></input> { }
                    {title}
                    <button style ={btnStyle} onClick ={this.props.delTodo.bind(this,id)}> 
                    X </button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}
const btnStyle={
    float:'right',
    border:'none',
    padding: '5px 8px',
    borderRadius:'50%',
    backgroundColor: '#f23c3c',
    cursor:'pointer'
}

export default Todoitem  
