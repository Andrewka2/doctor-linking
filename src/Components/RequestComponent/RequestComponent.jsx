import React from 'react'
import classes from './RequestComponent.module.scss'

function RequestComponent(props) {

    let addData = '';
    if(props.elem.requestData.length !== 0){
        addData = JSON.parse(props.elem.requestData)
    }
    
    return (
    <div className={classes.item}>
        <div className={classes.asa}>
            <p>{props.elem.personalType}</p>
        </div>
        <div className={classes.diagnosisCont}>
            <div className={classes.diagnosis}>
                <p>Діагноз: {addData.surgeryType}</p>
            </div>
            <div className={classes.code}>
                <p>Код МКХ: 1213124</p>
            </div>
        </div>
        <div className={classes.additionalInfo}>
            <p>Додаткова інформація: <span>{addData.additionalInfo}</span></p>
        </div>
        <div className={classes.name}>
            <p>Ім'я: <span>{props.elem.petitioner}</span></p>
        </div>
        <div className={classes.data}>
            <p>{`${new Date(props.elem.dateTime).toLocaleTimeString()}`}</p>
        </div>
    </div>
    );
}

export default RequestComponent