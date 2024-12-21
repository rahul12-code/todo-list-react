import React from "react";

const Input = ({ inputValue, handleInputChange, displayTodos }) => {
  return (
    <input
      type="text"
      placeholder="Enter your todo"
      className="w-11/12 text-sm font-medium mb-2 p-2 border-gray-500 border-[2px] rounded-md"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          displayTodos();
        }
      }}
    />
  );
};

export default Input;
