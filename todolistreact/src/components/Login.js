import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/users', formData)
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken)
  }

  return (
    <div>
      <h1>Create an Account!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" id="name" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login