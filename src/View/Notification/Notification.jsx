import React from "react";
import classes from './Notification.module.scss'
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export default function Notifications() {
    return (
        <div className={classes.Notifications}>
            <PageHeader title={"Виклик"}/>
            <div className={classes.notItemsContainer}>
                <div className={classes.item}>
                    <div className={classes.asa}>
                        <p>Шкала ASA: 3</p>
                    </div>
                    <div className={classes.diagnosisCont}>
                        <div className={classes.diagnosis}>
                            <p>Діагноз: конвульсії</p>
                        </div>
                        <div className={classes.code}>
                            <p>Код МКХ: 1213124</p>
                        </div>
                    </div>
                    <div className={classes.additionalInfo}>
                        <p>Додаткова інформація: <span>одноразова блювота фонтаном!</span></p>
                    </div>
                    <div className={classes.name}>
                        <p>Ім'я: <span>Іван Іванов</span></p>
                    </div>
                    <div className={classes.data}>
                        <p>{`${new Date().toLocaleTimeString()}`}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}