import React , {useState} from 'react'

function Form() {
    // Declare state variables for name, email, and message
  const [name, setname] = useState('Anjali');
  const [email, setemail] = useState('anjali819168@gmail.com');
  const [message, setmessage] = useState('Hello I am Anjali');

  // Handle changes in each input field
  function handleNameChange(e) {
    setname(e.target.value);
  }

  function handleEmailChange(e) {
    setemail(e.target.value);
  }

  function handleMessageChange(e) {
    setmessage(e.target.value);
  }

  // Handle form submission
  // preventDefault like reset all btn
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted:', { name, email, message });
  }
  return (
    <>

<div className='formgrp'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Message:</label>
          <br />
          <textarea value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    </>
  )
}

export default Form