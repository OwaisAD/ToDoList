import React from "react";

const Form = () => {
        // here i can write js code and functions etc.
        const inputTextHandler = (e) => {
          console.log
        }  
  
  return(
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      
    );
};

export default Form;