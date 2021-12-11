//  https://materializecss.com/text-inputs.html was invalueable with this. I have been using materialize to expand my knowledge
// React hooks also were a challenge but I think i got it 

import React from 'react';
// import {validateEmail} from '../../utils/helpers';
// const Contact = () => {
//     const[formState, setFormState] = useState({ name: '', email: '', message: ''});

//     const [errorMessage, setErrorMessage] = useState('');

// }
const Contact = () => {
    return (
        <div className="row">
        <h3 className='header'>Contact <span class="material-icons">person</span></h3>
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_box</i>
              <input id="first_name" type="text" className="validate white-text" name='name'/>
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 m4 l8">
                <i className="material-icons prefix">contact_mail</i>
              <input id="email" type="email" className="validate white-text" name="email"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 m4 l8">
                <i className="material-icons prefix">message</i>
                <input id="email" type="email" className="validate white-text"/>
            <label for="textarea1">Message</label>
            </div>
          </div>
          {/* {errorMessage && (
          <div>
             <p className="error-text">{errorMessage}</p>
          </div> */}
        
          <div className='row'>
            <button style={{backgroundColor: 'indigo accent-2'}}className="" type="submit" name="action">Submit
            <i className="material-icons right"></i>
            </button>
          </div>
        </form>
      </div>
    )
}
export default Contact