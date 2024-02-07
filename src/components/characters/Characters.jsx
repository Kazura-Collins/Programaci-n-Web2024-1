import React from 'react';

export function Characters({ icon }) {
  const characterStyle = {
    opacity: '0.5', // Inicialmente oscurecido
    transition: 'opacity 0.3s', // Transición suave
  };

  return (
    <div>
      <img
        src={icon}
        style={characterStyle}
        onMouseOver={(e) => (e.target.style.opacity = '1')} // Se ilumina al pasar el mouse
        onMouseOut={(e) => (e.target.style.opacity = '0.5')} // Vuelve a oscurecer al salir el mouse
      />
    </div>
  );
}
