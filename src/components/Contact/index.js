//  https://materializecss.com/text-inputs.html was invalueable with this. I have been using materialize to expand my knowledge

import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    return (
        <div className="row">
        <h3 className='header'>Contact <span class="material-icons">face</span></h3>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m4 l8">
              <i className="material-icons prefix">account_box</i>
              <input id="first_name" type="text" className="validate white-text" name='name'/>
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 l8">
                <i className="material-icons prefix">contact_mail</i>
              <input id="email" type="email" className="validate white-text" name="email"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 l8">
                <i className="material-icons prefix">message</i>
                <input id="email" type="email" className="validate white-text" name="email"/>
            <label for="textarea1">Message</label>
            </div>
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          )}
          <div className='row'>
            <button style={{backgroundColor: 'indigo accent-2'}}className="" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
}
export default Contact