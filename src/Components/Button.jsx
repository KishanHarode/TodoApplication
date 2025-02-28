import React from "react";

const Button = ({ data }) => {
  return (
    <button
      type="button"
      onClick={data}
      className="px-4 py-1 bg-blue-800 text-white rounded cursor-pointer hover:bg-blue-600"
    >
      Add Me
    </button>
  );
};

export default Button;
