import React from 'react';

function FormErrors(props) {
  return (
    <div className='form-errors'>
      {Object.keys(props.formErrors).map((fieldName, i) => {
        let fieldLabel = '';
        switch(fieldName) {
          case 'email_address':
            fieldLabel = "Email Address"
            break;
          case 'first_name':
            fieldLabel = "First Name"
            break;
          case 'last_name':
            fieldLabel = "Last Name"
            break;
          default:
            break;
        }
        if(props.formErrors[fieldName].length > 0){
          return (
            <div className="notification error" key={i}>{fieldLabel} {props.formErrors[fieldName]}</div>
          )        
        } else {
          return '';
        }
      })}
    </div>
  )
};

export default FormErrors;