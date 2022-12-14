import React from "react";
import classes from './DoctorRequest.module.scss';
import Reception from "../../Components/Reception/Reception";
import { useSelector } from "react-redux";

export default function DoctorRequest() {
    let user = useSelector(state => state.user)
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
                    user.position === 'test' ? <Reception user={user}/> : <Reception user={user}/> 
                }
            </div>
        </div>
    )
}