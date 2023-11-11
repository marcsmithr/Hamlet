import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link, NavLink, useHistory } from "react-router-dom";
import './ProfileButton.css'

function ProfileButton(){
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        if (!showMenu) return;

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

      let ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

      return (
        <div className="profile-button-container">
            <button className='profile-icon-container' onClick={openMenu}>
                <i class="fa-solid fa-user"></i>
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <div className="dropdown-menu">
                    <>
                        <li>
                            <button className="login-button1" onClick={logout}>Log Out</button>
                        </li>
                    </>
                </div>
            </ul>
        </div>
      )
}
