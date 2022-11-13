import React from 'react'
import classes from './PageHeader.module.scss'


export function PageHeader({ title }) {
    return (
    <div className={classes.itemHeader}>
        <div className={classes.itemDate}>
            <p>{title}</p>
        </div>
    </div>
    );
}