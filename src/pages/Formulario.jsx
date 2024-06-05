// src/pages/FormPage.js
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const FormPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log('Digitado no Formulário:', inputValue);
  };

  return (
    <div>
      <h3>Formulário Teste Console</h3>
      <Input label="Digite algo: " value={inputValue} onChange={handleInputChange} />
      <Button label="Enviar" onClick={handleButtonClick} />
    </div>
  );
};

export default FormPage;
