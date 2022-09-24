import React from 'react'
import classes from './Panel.module.scss'
import home from '../../assets/home.png'
import accept from '../../assets/accept.png'
import logo from '../../assets/logo.png'
import history from '../../assets/history.png'
import { Link } from 'react-router-dom'

export default function Panel(){
    return(
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
                            <img alt="home" src={home}/>
                        </div>
                        <div className={classes.panelItemText}>
                            <p>Графік</p>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImageAccept}>
                            <img alt="list" src={accept}/>
                        </div>
                        <div className={classes.panelItemText}>
                            <p>Оформити Виклик</p>
                        </div>
                    </div>
                    <div className={classes.panelItem}>
                        <div className={classes.panelItemImageAccept}>
                            <img alt="list" src={history}/>
                        </div>
                        <div className={classes.panelItemText}>
                            <Link to="/history">Історія</Link>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
