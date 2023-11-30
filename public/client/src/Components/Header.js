import React from 'react'

export default function Header (){
    return(
        <div id='header'>
            <div>
                <img id='header_logo' src='./assets/logo.png'/>
            </div>
            <div>
            <div id='navbar'>
                Home | Shop | Collections | About Us | Contact | Blog
            </div>
            <div id='userActions'>
                <div>
                Search | Login
                </div>
                </div>
            </div>
        </div>
    )
}