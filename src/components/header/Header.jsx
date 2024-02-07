import React from 'react';

export function Header() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#1a999f',
    padding: '2vh',
    position: 'fixed',
    width: '99%',
    height: '8vh',
    top: '0',
    margin: '0 auto', 
    alignItems: 'center',
  };

  const menuStyles = {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };

  const items = [
    {
      id: 1,
      text: 'Simple objection',
      options: null,
      path: '/',
    },
    {
      id: 2,
      text: 'Objection Maker',
      options: null,
      path: '/MakerPage',
    },
    {
      id: 3,
      text: 'Courtroom',
      options: null,
      path: '/CourtPage',
    },
  ];

  return (
    <div style={divStyle}>
      <p>Objection.lol</p>
      <ul style={menuStyles}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
