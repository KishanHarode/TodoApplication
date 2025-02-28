import React, { forwardRef } from "react";

const Input = forwardRef((props,ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder="Enter Something"
      value={props.values}
      onChange={props.handleTodo}
      className="px-4 py-1 rounded w-full border-[2px] outline-none border-blue-400 placeholder:text-slate-600 transition-all duration-300"
    />
  );
});

export default Input;
