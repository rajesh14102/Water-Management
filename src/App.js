import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleMapsProvider from './Pages/Gis Map/GoogleMapsProvider';
import Login from './Pages/Login/Login';
import Gis from './Pages/Gis Map/Gis';
import RWPH from './Pages/RWPH/RWPH';
import BlockDiagram from './Pages/Block Diagram/BlockDiagram';


function App() {
  return (
    <GoogleMapsProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/gis-map" element={<Gis />} />
          <Route path="/rwph" element={<RWPH />} />
          <Route path="/block-diagram" element={<BlockDiagram />} />

        </Routes>
      </Router>
    </GoogleMapsProvider>
  );
}

export default App;
