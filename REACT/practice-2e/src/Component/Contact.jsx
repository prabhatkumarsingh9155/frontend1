import React from 'react'

const Contact = () => {
  return (
    <>
    <title>Contact Info</title>
    <h1>Contact Information</h1>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required="" />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <br />
      <br />
      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required="" />
      <br />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
    id="message"
    name="message"
    rows={4}
    cols={ 50}
    defaultValue={""}
      />
      <br />
      <br />
      <input type="submit" defaultValue="Submit" />
    </form>
  </>
  
    
  )
}

export default Contact
