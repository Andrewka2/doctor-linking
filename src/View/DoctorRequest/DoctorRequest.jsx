import React from "react";
import classes from './DoctorRequest.module.scss';
import Reception from "../../Components/Reception/Reception";
import Anest from "../../Components/Anest/Anest";

export default function DoctorRequest() {
    let userType = 'anest'
    return (
        <div className={classes.doctorRequest}>
            <div className={classes.itemHeader}>
                <div className={classes.itemDate}>
                    <p>Взаємодії</p>
                </div>
            </div>
            <div className={classes.requestContentContainer}>
                <div className={classes.title}>
                    <h2>Формування запиту</h2>
                </div>
                {
                    userType === 'anest' ? <Anest/> : <Reception/>
                }
            </div>
        </div>
    )
}