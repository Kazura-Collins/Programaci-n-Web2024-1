// app.jsx
import React from 'react';
import { TaskContextProvider } from './context/TaskContextProvider';
import CatFacts from './components/cat-fact/Cat-Fact';
import CatImage from './components/cat-image/Cat-Image';

export default function App() {
  return (
    <TaskContextProvider>
      <AppContent />
    </TaskContextProvider>
  );
}

function AppContent() {
  console.log("Rendering AppContent...");
  return (
    <>
      <CatImage />
      <CatFacts/>
    </>
  );
}
