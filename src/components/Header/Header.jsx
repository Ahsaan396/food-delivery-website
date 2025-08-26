import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favorite food here</h2>
          <p>
            Order your fav food here.<br />
              Get it delivered fast!
          </p>

          <button>view menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header