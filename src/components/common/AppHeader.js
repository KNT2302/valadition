import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <header>
      <div className='logo'>Header</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/animation">Animation</Link>
          </li>
          <li>
            <Link to="/loading">Loading</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader
