import React from 'react'
import './Header.css'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favorite food here</h2>
          <p>
            Order your fav food here.<br />
              Get it delivered fast!
          </p>
        <Link to={'/explore-menu'}>
          <button >view menu</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header