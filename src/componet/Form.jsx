import React , {useState} from 'react'

function Form() {
    // Declare state variables for name, email, and message
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

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
        <h1 style={{fontSize:30}}> {name} {email}  {message}</h1>
      </form>
    </div>

    </>
  )
}

export default Form
