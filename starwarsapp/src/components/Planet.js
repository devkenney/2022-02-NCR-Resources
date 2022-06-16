import React from 'react'

const Planet = ({ apiResponse }) => {
  return (
    <div>
      {
        apiResponse?.results?.map((planet) => {
          return (
            <h2>{planet.name}</h2>
          )
        })
      }
    </div>
  )
}

export default Planet