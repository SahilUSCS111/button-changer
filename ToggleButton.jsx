import React, { useState } from 'react';

const ToggleButton = () => {
  // Use the useState hook to manage the button's color state
  const [color, setColor] = useState('blue');

  // Define a function to toggle the button's color
  const handleClick = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };

  return (
    // Render the button with inline styles that change based on the color state
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      Color: {color}
    </button>
  );
};

export default ToggleButton;