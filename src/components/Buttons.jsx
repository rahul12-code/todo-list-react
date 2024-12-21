import React from "react";

const Buttons = ({ inputValue, displayTodos, setInputValue, submitButton }) => {
  return (
    <div className="flex gap-2 mb-3">
      <button
        onClick={displayTodos}
        className={`text-white text-[15px] px-3 py-1 rounded-md ${
          inputValue
            ? "bg-blue-800 transition-transform duration-200 hover:scale-110"
            : "bg-gray-700 bg-opacity-65 cursor-not-allowed"
        }`}
      >
        {submitButton ? "Submit" : "Update"}
      </button>
      <button
        onClick={() => setInputValue("")}
        className={`text-white text-[15px] px-3 py-1 rounded-md ${
          inputValue
            ? "bg-blue-800 transition-transform duration-200 hover:scale-110 cursor-pointer"
            : "bg-gray-700 bg-opacity-65 cursor-not-allowed"
        }`}
      >
        Cancel
      </button>
    </div>
  );
};

export default Buttons;
