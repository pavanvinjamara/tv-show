import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';


function App() {
  return (
 
    <Routes>
    
        <Route exact path="/" element={<ShowList/>} />
        <Route path="/show/:id" element={<ShowDetails/>}/>
    
    </Routes>
   
  );
}

export default App;
