import React from 'react'
import classes from './UserInfoField.module.scss'

export function UserInfoFieldComponent({sectionName, sectionData}) {
    return (<div className={classes.userData}>
        <div className={classes.sectionName}>
            <p>{sectionName}</p>
        </div>

        <div className={classes.sectionData}>
            <p>{sectionData}</p>
        </div>
    </div>);
}