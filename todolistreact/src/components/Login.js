import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const [loginFormData, setLoginFormData] = useState({
    loginName: "",
    loginPassword: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleChangeLogin = (event) => {
    setLoginFormData({ ...loginFormData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/users', formData)
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken)
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/users/login', {
      name: loginFormData.loginName,
      password: loginFormData.loginPassword
    });
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
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

      <hr />

      <h1>Log In!</h1>

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginName">Name:</label>
        <input name="loginName" id="loginName" onChange={handleChangeLogin} />
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" name="loginPassword" id="loginpassword" onChange={handleChangeLogin} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login