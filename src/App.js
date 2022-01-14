import React from 'react'
import './App.css';
import { Container } from 'react-bootstrap'
import Home from './Home';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './About';

function App() {
  return (<>
    <Header />
    <Container >
      <Home/>
    </Container>
    </>
  );
}

export default App;
