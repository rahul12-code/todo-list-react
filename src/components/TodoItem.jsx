import React from "react";

const TodoItem = ({
  todo,
  index,
  completed,
  toggleCompletion,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <h3
        onDoubleClick={() => toggleCompletion(index)}
        className={`${
          completed ? "text-gray-500 italic line-through" : ""
        } cursor-pointer font-medium`}
      >
        {todo}
      </h3>
      <div>
        <button
          onClick={() => handleEdit(index)}
          className="bg-[#008000] text-white text-[14px] px-3 py-1 mr-2 rounded-md transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="bg-[#ff0000] text-white text-[14px] px-3 py-1 rounded-md transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
