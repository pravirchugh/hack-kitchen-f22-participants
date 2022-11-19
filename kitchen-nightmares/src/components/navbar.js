import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
export default function NavBar() {
    return (
        <>
        <div className="buttons">
            <NavLink to="/">
                <button className='button' id="b1">
                    Welcome!
                </button>

            </NavLink>
            <NavLink to="/awards">
                <button className='button' id="b2">
                    Awards
                </button>
            </NavLink>
            
            <NavLink to="/gallery">
                <button className='button' id="b3">
                    Gallery
                </button>
            </NavLink>
            <NavLink to="/about">
                <button className='button' id="b4">
                    About
                </button>
            </NavLink>

            
        </div>
        <hr style={{marginTop: "0px", paddingTop: "0px"}}></hr>
            
        </>
    );
}