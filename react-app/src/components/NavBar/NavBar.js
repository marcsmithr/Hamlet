
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-home-search-column'>
        <div className='nav-home-column'>
          <div className='home-icon-container'>
            <img className='home-icon' src='https://i.ibb.co/6XXFb2q/dae2fd8b-4edf-4e3b-b7fe-732d0012e9e3.jpg' alt='A home icon featuring a colorful hamlet'/>
          </div>
        </div>
      </div>
      <div className='nav-icon-column'>

      </div>
      <div className='nav-profile-column'>

      </div>
    </nav>
  );
}

export default NavBar;
