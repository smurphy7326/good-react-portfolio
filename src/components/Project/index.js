import React from 'react'; 

// https://materializecss.com/cards.html is where i am getting most of the things for this part. 
//links need to show up

const Project = (props) => {
    return (
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
        <img className="project" alt={props.name} src={require(`../../assets/images/${props.image}`).default}/>
          <span className="card-title blue-text text-darken-2 card-panel teal lighten-2">{props.name}</span>
        </div>
        <div class="card-content">
          <p>{props.description}</p>
        </div>
        <div class="card-action">
            <a target="_blank" rel="noreferrer" href={props.github} i class="fab fa-github-square">Github</a>
            <a target="_blank" rel="noreferrer" href={props.deploy} i class="fas fa-paper-plane">Deploy</a>
        </div>
      </div>
    </div>
    )
}

export default Project

