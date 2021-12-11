import './App.css';
import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// Had some help with AskBCS with this part for the navigation since it was pretty tricky. 
function App() {
  const [currentPage, handlePageChange] = useState('about');
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio/>;
        
      case 'Contact':
        return <Contact/>;

      case 'Resume':
        return <Resume/>;
        
      default: return <About/>;
    }
  };
  return (
    <div className='page-container'>
    <div className='content-wrap'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main className='container'>
        {
          renderPage()
        }
      </main>
    </div>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
