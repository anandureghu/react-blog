import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'


function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <img src="https://i.pinimg.com/originals/16/1c/ff/161cff19e668e270ccb1b98856ebd81e.png" alt="logo" onClick={() => navigate('/')}/>
            </div>
            <ul className="links">
                <li className="link">
                    <Link to={"/"}>home</Link>
                </li>
                <li className="link">
                    <Link to={"/about"}>about</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar