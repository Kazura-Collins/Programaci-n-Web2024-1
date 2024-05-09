import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Favorites } from './components/Favorites/Favorites'; 
import { GifSearch } from './components/Gif-Search/Gifs';

function App() {
  return (
    <div className="App">
      
      <Routes> 
        <Route path="/" element={<GifSearch />} /> 
        <Route path="/favorites" element={<Favorites />} />
      </Routes> 
      
    </div>
  );
}

export default App;
