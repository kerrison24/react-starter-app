import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page">Page 1</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavigationBar
