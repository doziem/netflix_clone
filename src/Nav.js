import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                handleShow(true)
            } else handleShow(false)
            return () => {
                window.removeEventListener('scroll')
            }
        })
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='neflix logo' />

            <img
                className='nav__avater'
                src='image/netflix_icon.png' alt='neflix icon' />
        </div>
    )
}

export default Nav
