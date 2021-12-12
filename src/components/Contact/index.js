//  https://materializecss.com/text-inputs.html was invalueable with this. I have been using materialize to expand my knowledge
// React hooks also were a challenge but I think i got it 
// along with the general just trying to make the error messages work. Den of geeks was really awesome with the literature on this

import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

const Contact = () => {
    const[formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };

    const handleChange = (event) => {
      if (event.target.name=== 'email') {
        const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage('The email you entered is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage ('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
    };



    return (
        <div className="row">
        <h3 className='header'>Contact <span class="material-icons">person</span></h3>
        <form className="col s6" onSubmit={handleSubmit}> 
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_box</i>
              <input id="first_name" type="text" className="validate black-text" name='name' onChange={handleChange}/>
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 m4 l8">
                <i className="material-icons prefix">contact_mail</i>
              <input id="email" type="email" className="validate black-text" name="email" onChange={handleChange}/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 m4 l8">
                <i className="material-icons prefix">message</i>
                <textarea name="message" type="textArea1" className="materialize-text area validate black-text" onChange={handleChange}/>
            <label htmlFor="textArea1">Message</label>
            </div>
          </div>
          {errorMessage && (
          <div>
             <p className="error-text">{errorMessage}</p>
          </div>
          )}
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