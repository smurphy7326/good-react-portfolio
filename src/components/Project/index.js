import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// https://materializecss.com/cards.html is where i am getting most of the things for this part. 
// different links for the github and deployed icons, looking for the different photos in regards to the projects
const Project = () => {
    return (
        <div className='col s12 m6'>
            <div className="">
                <div className='card-image'>
                    <img className='photos-img' alt={props.name} src={require(`../../assets/images/${props.image}`).default}/>
                </div>
                <div className="card-content">
                <span className="card-title activator">{props.name}<i className="material-icons right">more_vert</i></span>
                <p>
                    <a href={props.github}></a>
                    <a href={props.deploy}></a>
                </p>
                </div>
                <div className='card-reveal'>
                    <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
                    <p className='grey-text text-darken-3'> {props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Project

