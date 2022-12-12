import React from 'react'
import classes from './AddFormItem.module.scss'
import addItem from '../../assets/addItem.png'
 
function AddFormItem() {
  return (
    <div className={classes.AddFormItem}>
        <div className={classes.text}>
            <p>Додати форму</p>
        </div>
        <img src={addItem} alt="add-item" />
    </div>
  )
}

export default AddFormItem