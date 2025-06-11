import React from 'react'

const Button = ({ name, color, border }) => {
  return (
    <button
      className="text-xs font-medium rounded-full px-2 py-[1.5px] w-24"
      style={{
        backgroundColor: color,
        border: `0.5px solid ${border}`,
        color: border,
      }}
    >
      {name}
    </button>
  );
};


export default Button