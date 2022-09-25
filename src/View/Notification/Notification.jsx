import React from "react";
import classes from './Notification.module.scss'

export default function Notifications(){
    return (
        <div className={classes.Notifications}>
            <div className={classes.itemHeader}>
                <div className={classes.itemDate}>
                    <p>Виклики</p>
                </div>
            </div>
            <div className={classes.notItemsContainer}>
                <div className={classes.item}>
                    <div className={classes.asa}>
                        <p>Шкала ASA: 3</p>
                    </div>      
                    <div className={classes.diagnosisCont}>
                        <div className={classes.diagnosis}>
                            <p>Діагноз: some diagnosis</p>
                        </div>
                        <div className={classes.code}>
                            <p>Код МКХ: #sdfsdfsdf</p>
                        </div>
                    </div>
                    <div className={classes.additionalInfo}>
                        <p>Додаткова інформація: <span>some additional text that we should tell them all!</span></p>
                    </div>
                    <div className={classes.name}>
                        <p>Ім'я <span>Andrew Katsalap</span></p>
                    </div>
                    <div className={classes.data}>
                        <p>{`${new Date().toLocaleTimeString()}`}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}