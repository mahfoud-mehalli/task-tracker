import React from "react";

const TaskForm = () => {
  return (
    <form>
      <input
        type="text"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
