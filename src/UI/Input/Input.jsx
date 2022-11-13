import React from 'react'
import classes from './Input.module.scss'

export function Input({pattern, register, label, itemType, type, placeholder}) {
  let cls = [classes.nameImg]

  if(itemType){
    cls.push(classes[itemType])
  }
  if(type === 'registration'){
    return (
      <div className={classes.regInputCont}>
        <div className={cls.join(' ')}>
          <img src={require(`../../assets/registrationImages/${itemType}.png`)} alt="login" />
        </div>
        <input {...register(label, {required: true, pattern: pattern})} className={classes.Input} placeholder={placeholder} type={'text'}></input>
      </div>
    )
  }
  
}