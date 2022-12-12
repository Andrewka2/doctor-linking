import React from 'react'
import classes from './Logo.module.scss'
import logo from '../../assets/logo.png'

function Logo() {
    return (
        <>
            <img className={classes.logo} src={logo} alt="logo" />
        </>
    )
}

export default Logo