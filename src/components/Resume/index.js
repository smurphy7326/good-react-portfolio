import React from 'react'

const Resume = () => {
    return (
        <div className='row'>
            <h3 className='header'>Resume <span><img src='/favicon.ico' alt='aboutIcon'></img></span></h3>
            <div className='row'>
                <h5 className='col s12'>Click on this link to download my resume! <a href='https://docs.google.com/document/d/18EsiYCBKOuDHvzqX3ybUkaVWs-yp0pxyj428RD4Y9nM/edit?usp=sharing' target='_blank'>Resume</a></h5>
            </div>
            <div className='divider'></div>
            <div className='row'>
                <h4 className='col s12'>Technologies</h4>
            </div>
            <div className='row'>
            <div className="col s12 m6">
                <div className="card blue">
                    <div className="card-content">
                        <h3 className="card-title">Front-End Technologies</h3>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>Handlebars.js</li>
                        <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card-content">
                    <div className="card blue">
                    <h3 className="card-title">Back-End Technologies</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Heroku</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Resume;
