import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  return (
    <div class="App">
      <h1 className="name">Thisitha Wickramaarachchi</h1>
      <div class="container">
        <div class="hero-circle">
          <div class="hero-rotate" id="circle">
            <div class="social">
              <a href="https://github.com/Thizh"><img src="./assets/github.png" /></a>
            </div>
            <div class="social">
              <a href="https://discord.com/users/dalek_thyz"><img src="./assets/discord.png" /></a>
            </div>
            <div class="social">
              <a href="https://wwww.linkedin.com/in/thizh"><img src="./assets/linkedin.png" /></a>
            </div>
            <div class="social">
              <a href="mailto:thizhwick@gmail.com"><img src="./assets/gmail.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
