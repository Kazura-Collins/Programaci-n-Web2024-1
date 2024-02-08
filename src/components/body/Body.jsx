import React from 'react';

export function Main() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15vh',
  };
  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px',
  };

  return (
    <>
      <div style={containerStyle}>
        <h1>Objection!</h1>
        <p id="description">Select your character and pose, submit your objection then surprise your friends with your irrefutable evidence!</p>
      </div>
      <div style={inputContainerStyle}>
        {/* Input para ingresar texto */}
        <input
          type="text"
          style={{
            width: '80%',
            height: '100px',
            fontSize: '16px',
            margin: '15px',
          }}
          placeholder="Enter your objection"
        />
        {/* Botón de enviar */}
        <button>Submit</button>
      </div>
    </>
  );
}

export function Service({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}
