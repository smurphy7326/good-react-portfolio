import React from 'react'

const Resume = () => {
    return (
        <div className='row'>
            <h3 className='header'>Resume <span><img src='UCONNlogo.png' alt='uconnLogo'></img></span></h3>
            <div className='row'>
                <h5 className='col s12'>Click on this link to download my resume! <a href='https://docs.google.com/document/d/18EsiYCBKOuDHvzqX3ybUkaVWs-yp0pxyj428RD4Y9nM/edit?usp=sharing' target='_blank'>Click Here!</a></h5>
            </div>
            <div className='divider'></div>
            <div className='row'>
                <h4 className='col s12 center-align'>Technologies</h4>
            </div>
            <div className='row'>
            <div className="col s12 m6">
                <div className="card blue">
                    <div className="card-content">
                        <h3 className="card-title center-align">Front-End Technologies</h3>
                        <ul class="collection">
                        <li class="collection-item center-align card blue lighten-1">HTML</li>
                        <li class="collection-item center-align card blue">CSS</li>
                        <li class="collection-item center-align card blue lighten-1">jQuery</li>
                        <li class="collection-item center-align card blue">Bootstrap</li>
                        <li class="collection-item center-align card blue lighten-1">Materialize</li>
                        <li class="collection-item center-align card blue">Handlebars.js</li>
                        <li class="collection-item center-align card blue lighten-1">React</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card-content">
                    <div className="card blue">
                    <h3 className="card-title center-align">Back-End Technologies</h3>
                    <ul class="collection">
                        <li class="collection-item center-align card blue lighten-1">MySQL</li>
                        <li class="collection-item center-align card blue">Sequelize</li>
                        <li class="collection-item center-align card blue lighten-1">MongoDB</li>
                        <li class="collection-item center-align card blue">Mongoose</li>
                        <li class="collection-item center-align card blue lighten-1">Heroku</li>
                        <li class="collection-item center-align card blue">Node.js</li>
                        <li class="collection-item center-align card blue lighten-1">Express.js</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Resume;
