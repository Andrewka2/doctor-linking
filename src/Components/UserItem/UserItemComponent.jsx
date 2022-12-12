import React from 'react'
import classes from './UserItem.module.scss'

export function UserItemComponent({ chooseUserHandler, id, name, surname, position }) {

    function selectUser(){
        chooseUserHandler(id)
    }

    return (
        <div onClick={selectUser} className={classes.user}>
            <div className={classes.name}>
                <p>{name} {surname}</p>
            </div>
            <div className={classes.position}>
                <p>position: {position}</p>
            </div>
        </div>
    );
}