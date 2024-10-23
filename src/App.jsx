import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Cities from './pages/Cities';
import CitiesDetail from './pages/CitiesDetail';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="bg-primary min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div><Hero /><Carousel /></div>} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/city" element={<CitiesDetail />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



