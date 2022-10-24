import React from "react";
import classes from './DoctorRequest.module.scss';
import Reception from "../../Components/Reception/Reception";
import Anest from "../../Components/Anest/Anest";
import SurgeonOperative from "../../Components/Surgeon/SurgeonOperativeSister/SurgeonOperarive";

export default function DoctorRequest() {
    let userType = 'anest1'
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
                    userType === 'anest' ? <Reception/> : <SurgeonOperative/>
                }
            </div>
        </div>
    )
}