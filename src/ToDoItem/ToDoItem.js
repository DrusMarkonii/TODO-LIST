import React from "react";

const ToDoItem = props => {
    const resolvedClass = {
        textDecoration: 'line-through'
    }
    const resolvedClassDefault = {
        textDecoration: 'underline'
    }
    let resolvedClassColor = {
        backgroundColor: 'green'
    }
    return (
        <div className="todo-item">
            <div 
                className="description-wrapper"
                style= {
                    props.completed == true ? resolvedClassColor : resolvedClassDefault
                } 
            >
                <p 
                    style = {
                    props.completed == true ? resolvedClass : {}
                    }
                >
                    {props.description}
                </p>
                <div className="input-wrapper">
                <input 
                    type="checkbox" 
                    defaultChecked = {props.completed}
                    onChange = {props.handleChange}
                />
            </div>
            </div>
            
        </div>
    )
}

export default ToDoItem