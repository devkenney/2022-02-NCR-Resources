import React from 'react'
// import './css/about'

const About = (props) => {
  return (
    <div>
      <h3>Introduction:</h3>
      <p>A scrappy software developer ready to hit the ground running on whatever comes my way!</p>
      <h4>Bank Account:</h4> $ {props.bankAccount}
    </div>
  )
}

export default About