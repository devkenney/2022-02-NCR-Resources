import React from 'react'
import { useNavigate } from 'react-router-dom'

const Person = ({ apiResponse }) => {

  return (
    <div>
      {
        apiResponse?.results?.map((person) => {
          return (
            <div key={person.name}>
              <h2>{person.name}</h2>
              <h3>{person.name}{person.hair_color === 'n/a' ? " doesn't have hair" : `'s hair color is ${person.hair_color}`}, their eyes are {person.eye_color}, and their skin is {person.skin_color}.</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Person