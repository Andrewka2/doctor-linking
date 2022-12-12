import React from 'react'
import classes from './Panel.module.scss'
import home from '../../assets/home.png'
import accept from '../../assets/accept.png'
import logo from '../../assets/logo.png'
import history from '../../assets/history.png'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import notification from '../../assets/notification.png'

export default function Panel() {
    return (
        <div className={classes.Panel}>
            <div className={classes.panelCont}>
                <div className={classes.logo}>
                    <div className={classes.logoImg}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={classes.logoText}>
                        <p>Doctor Linking</p>
                    </div>
                </div>
                <div className={classes.panelItems}>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImage}>
                            <img alt="user" src={user} />
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="user">Профіль</Link>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImage}>
                            <img alt="home" src={home} />
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="/">Графік</Link>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImageAccept}>
                            <img alt="list" src={accept} />
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="/doctorRequest">Оформити Виклик</Link>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImageAccept}>
                            <img alt="list" src={history} />
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="/history">Історія</Link>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImageAccept}>
                            <img alt="list" src={notification} />
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="/notification">Виклик</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
