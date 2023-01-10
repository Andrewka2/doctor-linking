import React from 'react'
import classes from './UserInfoField.module.scss'

export function UserInfoFieldComponent({isEdit, sectionName, sectionData, fieldType, reducerDispatch, state}) {
    function onCHangeHandler(e){
        reducerDispatch({type: 'UPDATE_FIELD', payload: {type: fieldType, value: e.target.value}})
    }
    return (
    <div className={classes.userData}>
        <div className={classes.sectionName}>
            <p>{sectionName}</p>
        </div>

        <div className={classes.sectionData}>
            {
                isEdit ? <input onChange={onCHangeHandler} value={state[fieldType]} placeholder={sectionData} type={'text'}></input> : <p>{sectionData}</p>
            }
        </div>
    </div>
);
}