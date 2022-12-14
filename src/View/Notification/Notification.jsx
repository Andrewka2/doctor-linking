import React, { useEffect } from "react";
import classes from './Notification.module.scss'
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetRequests } from "../../root/actions/requestsAction";
import RequestComponent from "../../Components/RequestComponent/RequestComponent";

export default function Notifications() {
    let dispatch = useDispatch()
    let requests = useSelector((state => state.requests.requests))
    useEffect((() => {
        dispatch(thunkGetRequests())
    }), [dispatch])
    return (
        <div className={classes.Notifications}>
            <PageHeader title={"Виклик"} />
            <div className={classes.notItemsContainer}>
                {
                    requests.map((elem) => {
                        return (
                            <RequestComponent elem={elem}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

/*
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
*/