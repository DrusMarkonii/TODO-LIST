import React from 'react'

//Реакт компонент ToDOList

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             items: []
        }
       
        this.handelChange = this.handelChange.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
        }

        handelChange(e) {
            this.setState(state => ({input: e.target.value}))
        }

        handelSubmit(e) {
            e.preventDefault()
            this.setState({
                input: '',
                items: [...this.state.items, this.state.input]
            })
            
            
        }

        
    
    render() {
        const arr = this.state.items
       return (
           <div>
               <form onSubmit={this.handelSubmit}>
                   <input 
                       type="text"
                       value={this.state.input}
                       onChange={this.handelChange}
                       placeholder='Enter task'
                   />
                   <button>Add task</button>
               </form>

               <ul>
                 {arr.map((item, index) => <li key={index}>{item}</li>)}
               </ul>
           </div>
       )
        
    }
}


export default ToDoList