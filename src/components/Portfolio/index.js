import React, { useState } from 'react';
import Project from '../Project';

const Portfolio = () => {
    const [projectsList, setProjectsList] = useState(projects);
    return (
        <div className='row'>
            <h2 className='header'>Portfolio</h2>
            {projectsList.map(project => (
                <Project
                id={project.id}
                name={project.name}
                image={project.image}
                github={project.github}
                deploy={project.deploy}
                description={project.description}
                key={project.id}
                />
            ))}
        </div>
    )
}

export default Portfolio