import React from 'react';

function Form({ children, handleSubmit, ...props }) {
  const handleEnter = event => {
    if(event.which === 13 || event.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <div onKeyUp={handleEnter} {...props}>
      {children}
    </div>
  )
}

export default Form;
