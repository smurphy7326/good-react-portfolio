import './App.css';
import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About/>;

      case 'Portfolio':
        return <Portfolio/>;

      case 'Contact':
        return <Contact/>;

      case 'Resume':
        return<Resume/>;

      default: return <About/>;
      }
    };

    return (
      <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div>
        {
          renderPage()
        }
      </div>
      <Footer/>
    </div>  
  );
}

export default App;
