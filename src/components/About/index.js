import React from 'react';
import profilePicture from '../../assets/images/profilePicture.png'


const About = () => {
    return (
       <div className="container row center-align">
           <div className="col">
               <h3 className='header align-center text-color royal blue'>About Me</h3>
            <div className='card-panel blue-grey lighten-4'>
            <div className='card-image center-align'>
               <div className='card-image center-align'>
                   <img src={profilePicture} alt='headshot'></img>
           </div>
           <div className='card-stacked'>
               <div className='card-content'>
                   <h3 className='center-align 'style={{borderBottom: '5px solid'}}>What I do</h3>
                   <p>My name is Sean Murphy. I am a full stack developer trying to learn different and more technologies each and everyday</p>
                   <p> The different technologies that I have learned are Node.js, Express.js, HTML, REACT, Sequelize, CSS, Javascript, MongoDB among other ones.</p>
                   <p> I am trying to learn difficult and different technologies to make myself a better developer to be better suited for any challenges that may arise from the real world problems.</p>

               </div>
           </div>
           </div>
       </div>
       </div>
       </div>
    )

}

export default About