import React from 'react'
import About from './About'

const Home = () => {

  const talents = [
    "Singing",
    "Playing Piano",
    "Playing Video Games",
    "Programming",
    "Teaching"
  ]

  const name = "Devin"
  const bankAccount = 1000

  return (
    <div>
      <h1>Hi! I am {name}</h1>
      <h2>Talents:</h2>
      <ul>
        {
          talents.map((item) => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
      <About bankAccount={bankAccount} />
      <About bankAccount={20000} />
    </div>
  )
}

export default Home