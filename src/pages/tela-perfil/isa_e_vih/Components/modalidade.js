import React, { useState } from 'react';

const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Opção one', 'Opção two', 'Opção tree'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const updatedOptions = [option]; // Apenas a opção clicada será selecionada
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="escolha">
        {selectedOptions.length > 0 ? `${selectedOptions}` : 'Selecionar'}
        {isOpen ? ' ᐱ' : ' ᐯ'}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                checked={selectedOptions[0] === option} // Apenas a opção selecionada terá o checkbox marcado
                onChange={() => handleOptionClick(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
