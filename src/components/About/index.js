import React from 'react';
import { Container, Row } from 'react-bootstrap';
// Have to have a profile picture eventually 

const About = () => {
    return (
        <Container id= 'aboutContainer'>
            <Row className='firstAboutMe'>
                <h2> About Me </h2>
            </Row>
            <Row>
                <section>
                    My name is Sean Murphy. I am trying to be a Full Stack Developer. I am learning many different technologies such as React and Node.js, and learning more about coding each and every day.
                </section>
            </Row>
            <Row>
                <section>
                    {/* <img src='./assets/images/'></img> */}
                </section>
            </Row>
        </Container>
    )
}

export default About