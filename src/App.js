import './App.css';
import React, { useState } from "react";
import { Container, Row } from 'react-bootstrap';
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
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
      <Container fluid>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Row id='sectionsContainer'>
        {
          renderPage()
        }
      {/* <Footer/> */}
    </Row>  
    </Container>
  );
}

export default App;
