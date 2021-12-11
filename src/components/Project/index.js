import React from 'react'; 

// https://materializecss.com/cards.html is where i am getting most of the things for this part. 
//links need to show up

const Project = (props) => {
    return (
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
        <img className="activator responsive-img" alt={props.name} src={require(`../../assets/images/${props.image}`).default}/>
          <span className="card-title text-color red">{props.name}</span>
        </div>
        <div class="card-content">
          <p>{props.description}</p>
        </div>
        <div class="card-action">
            <a href={props.github} target="_blank" rel="noreferrer"></a>
            
            <a className="deploy" href={props.deploy} target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Project

