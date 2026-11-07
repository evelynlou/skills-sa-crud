import React, { useState } from 'react';
import './botao.css';

export const Botao = ({ onClick }) => {
  return (
    <button className="botao-project" onClick={onClick}>
      Novo projeto+
    </button>
  );
};

// export const botaoConstrucao = ({ onClick, children }) => {
//   return (
//     <button className="botaoConstrucao" onClick={onClick}>
//       {children}
//     </button>
//   );
// };
