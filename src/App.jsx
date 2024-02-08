import React, { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import { Header, Main, Footer, Characters } from './components'
// import { HomePage, MakerPage, CourtPage, PageNotFound } from './Pages'

export function App () {

  // Array con los íconos de los personajes
  const characterIcons = [
    'https://objection.lol/Images/Characters/1/icon.png',
    'https://objection.lol/Images/Characters/2/icon.png',
    'https://objection.lol/Images/Characters/3/icon.png',
    'https://objection.lol/Images/Characters/4/icon.png',
    'https://objection.lol/Images/Characters/5/icon.png',
    'https://objection.lol/Images/Characters/6/icon.png',
    'https://objection.lol/Images/Characters/7/icon.png',
    'https://objection.lol/Images/Characters/8/icon.png',
    'https://objection.lol/Images/Characters/9/icon.png',
    'https://objection.lol/Images/Characters/10/icon.png',
    'https://objection.lol/Images/Characters/11/icon.png',
    'https://objection.lol/Images/Characters/12/icon.png',
  ];

  const [selectedIcon, setSelectedIcon] = useState(null);

  // Tabla e intento de click
  const tableStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2px',
    width: '20vw',
    margin: '2%',
  };
  // const handleIconClick = (icon) => {
  //   if (selectedIcon === icon) {
  //     // Si ya está seleccionado, deseleccionar
  //     setSelectedIcon(null);
  //   } else {
  //     // Si no está seleccionado, seleccionar
  //     setSelectedIcon(icon);
  //   }
  // };

  return (
    <>
      <Header />

      <Main />
      <div style={tableStyle}>
        {characterIcons.map((icon, index) => (
          <Characters key={index} icon={icon}/>
        ))}
      </div>

{/* Este es el mismo pero intentando usar UseState e iluminar con click */}
      {/* <div style={tableStyle}>
        {characterIcons.map((icon, index) => (
          <Characters
            key={index}
            icon={icon}
            onClick={() => handleIconClick(icon)}
            style={{
              // Íconos oscurecidos cuando no están seleccionados
              opacity: selectedIcon !== icon ? 0.5 : 1,
              filter: selectedIcon !== icon ? 'grayscale(100%)' : 'none',
            }}
          />
        ))}
      </div> */}

      {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/maker' element={<MakerPage />} />
        <Route path='/courtroom' element={<CourtPage />} />

        <Route path='/*' element={<PageNotFound />} />
      </Routes> */}
      
      <Footer />
    </>
  )
}