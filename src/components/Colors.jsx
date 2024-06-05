import React, { useState, useEffect } from 'react';

const colors = ['#FF5733', '#3498DB', '#27AE60', '#F39C12'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Colors = () => {
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const handleColorChange = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
    alert(`Código HEX da cor: ${newColor}`);
  };

  return (
    <div>
      <h3>Alterar Cor de Fundo</h3>
      <button onClick={handleColorChange}>Mudar Cor</button>
    </div>
  );
};

export default Colors;
