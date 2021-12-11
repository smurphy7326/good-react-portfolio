import React from 'react'; 

// https://materializecss.com/cards.html is where i am getting most of the things for this part. 

const Project = (props) => {
    return (
        <div className='col s12 m4 l4'>
        <div className="card hoverable grey darken-3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator responsive-img" alt={props.name} src={require(`../../assets/images/${props.image}`).default}/>
            </div>
            <div className="card-content">
                <span className="card-title activator">{props.name}<i className="material-icons right">more_vert</i></span>
                <p>
                    <a href={props.github} target='_blank' rel="noreferrer"></a>
                    <a href={props.deploy} target='_blank' rel="noreferrer"></a>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-3">{props.name}<i className="material-icons right">close</i></span>
                <p className='grey-text text-darken-3'>{props.description}</p>
            </div>
        </div>
        </div>
    )
}

export default Project

