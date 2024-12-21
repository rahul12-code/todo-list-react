import React, { useState } from "react";
import Input from "./Input";
import Buttons from "./Buttons";
import Instruction from "./Instruction";
import TodoItem from "./TodoItem";


const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [submitButton, setSubmitButton] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const displayTodos = () => {
    if (submitButton) {
      setTodos([...todos, inputValue]);
      setCompletedTodos([...completedTodos, false]); // Initialize completed state as false
    } else {
      // Update the existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue; // Update the todo at the tracked index
      setTodos(updatedTodos);
      setSubmitButton(true);
      setEditIndex(null);
    }
    setInputValue("");
  };

  const handleEdit = (index) => {
    setSubmitButton(false);
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);

    const updatedCompletedTodos = [...completedTodos];
    updatedCompletedTodos.splice(index, 1);
    setCompletedTodos(updatedCompletedTodos);

    setInputValue("");
  };

  const toggleCompletion = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    updatedCompletedTodos[index] = !updatedCompletedTodos[index];
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 flex flex-col w-1/2">
      <Input
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          displayTodos={displayTodos}
        />
        <Buttons
          inputValue={inputValue}
          displayTodos={displayTodos}
          setInputValue={setInputValue}
          submitButton={submitButton}
        />
        <Instruction />
        <div className="w-11/12">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              completed={completedTodos[index]}
              toggleCompletion={toggleCompletion}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
