import navbar from './Navbar.module.css';
import React from 'react';

function Navbar() {
    return (
        <div className={navbar.navbar}>
            <div className={navbar.header}>Chat App!</div>
            <div className={navbar.links}>
                <div className={navbar.chat}>Chat</div>
                <div className={navbar.login}>Login/Register</div>

            </div>

        </div>
    )

}

export default Navbar;