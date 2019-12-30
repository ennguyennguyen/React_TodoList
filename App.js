/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React, { Component } from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component {

    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }

    // create a new array const that is the result of mapping of todosData

    // - todosData: the data that would normally come from API call, not a local file
    // - TodoItem: component (which is the function to call on the data)
    
   

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
} 

export default App