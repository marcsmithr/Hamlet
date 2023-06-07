
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const [selectedIcon, setSelectedIcon] = useState("home")

  let homeId = ""
  let causeId = ""
  let eventId = ""
  let groupId = ""
  let worldId = ""

  switch(selectedIcon){
    case "home":
      homeId = "selected"
      break
    case "causes":
      causeId = "selected"
      break
    case "events":
      eventId = "selected"
      break
    case "groups":
      groupId = "selected"
      break
    case "world":
      worldId = "selected"
      break
  }

  useEffect(()=>{
    console.log(selectedIcon)
  }, [selectedIcon])
  return (
    <nav>
      <div className='nav-home-search-column'>
        <div className='nav-home-column'>

          <div className='home-icon-container'>
            <img className='home-icon' src='https://i.ibb.co/6XXFb2q/dae2fd8b-4edf-4e3b-b7fe-732d0012e9e3.jpg' alt='A home icon featuring a colorful hamlet'/>
          </div>

        </div>
        <div className='search-bar-container'>

            <div className='search-bar'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

          </div>
      </div>
      <div className='nav-icon-column'>

        <div className='nav-icon-container' onClick={()=>setSelectedIcon("home")} id={homeId}>
          <i class="fa-solid fa-house"></i>
        </div>

        <div className='nav-icon-container' onClick={()=>setSelectedIcon("causes")} id={causeId}>
         <i class="fa-solid fa-trowel"></i>
        </div>

        <div className='nav-icon-container' onClick={()=>setSelectedIcon("groups")} id={groupId}>
          <i class="fa-solid fa-people-group"></i>
        </div>


        <div className='nav-icon-container' onClick={()=>setSelectedIcon("events")} id={eventId}>
          <i class="fa-regular fa-calendar-days"></i>
        </div>

        <div className='nav-icon-container' onClick={()=>setSelectedIcon("world")} id={worldId}>
          <i class="fa-solid fa-globe"></i>
        </div>

      </div>
      <div className='nav-profile-column'>
        hello2
      </div>
    </nav>
  );
}

export default NavBar;
