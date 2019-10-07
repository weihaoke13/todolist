import React, {Component} from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';

import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// import uuid from 'uuid';
import axions from 'axios';
import './App.css';
import Axios from 'axios';



class App  extends Component{
  constructor(props) {
    super(props);
    this.state={
      todos:[ ]
  }
}

componentDidMount(){
  axions.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then(res => this.setState({todos:res.data}))
}
  
//toggle complete 
markComplete =(id) => {
  this.setState({todos: this.state.todos.map(todo=>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}
//toggle delete button
delTodo =(id) =>{
  axions.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]}));

}

addTodo = (title) =>{

  // const newTodo={
  //   id:uuid.v4(),
  //   title,
  //   completed:false
  // }

  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
    .then(res=> this.setState({todos:
    [...this.state.todos, res.data]}));

}


render(){ 
  console.log(this.state.todos)
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
               <AddTodo addTodo={this.addTodo} />
               <Todos todos = {this.state.todos} 
                markComplete={this.markComplete}
                delTodo ={this.delTodo}/>

            </React.Fragment>
          )}>
          </Route>
          <Route path="/about" component={About} />
         
        </div>
      </div>

    </Router>
    
  );
}
 
}


  

export default App;
