import React, {useState, useReducer, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { thunkDeleteUser, thunkUpdateUser } from '../../root/actions/userActions'
import { UserInfoFieldComponent } from '../UserInfoFIeld/UserInfoFieldComponent'
import classes from './UserInfo.module.scss'

const initialState = {
    id: '',
    isTemporary: false,
    role: '',
    name: '',
    surname: '',
    position: '',
    email: '',
    phone: ''
};

function reducer(state, action) {
    switch (action.type) {
      case 'SET_FIELDS':
        return {
            ...state,
            ...action.payload
        }
      case 'UPDATE_FIELD':
        return {
            ...state,
            [action.payload.type]: action.payload.value
        };
      default:
        throw new Error();
    }
  }

export function UserInfoComponent({ choosedUser, id }) {
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()
    const [state, reducerDispatch] = useReducer(reducer, initialState)
    function isEditHandler(){
        setIsEdit(!isEdit)
    }

    function userDeleteHandler(){
        dispatch(thunkDeleteUser(choosedUser.id))
    }
    function saveHandler(){
        dispatch(thunkUpdateUser(state, id))
    }
    useEffect(()=>{
        reducerDispatch({type: 'SET_FIELDS', payload: choosedUser})
    }, [choosedUser])
    
    return (
        <div className={classes.userInfoContainer}>

            <div className={classes.container}>
                <div className={classes.header}>
                    <div onClick={isEditHandler} className={classes.headerBtn}>
                        <p>Редагувати</p>
                    </div>
                    <div onClick={userDeleteHandler} className={classes.headerBtn}>
                        <p>Видалити</p>
                    </div>
                    {
                        isEdit ? <div onClick={saveHandler} className={classes.headerBtn}>
                        <p>Зберегти</p>
                    </div> : null
                    }
                    
                </div>
                <div className={classes.userDataContainer}>
                    <div className={classes.personalData}>

                        <UserInfoFieldComponent isEdit={isEdit} sectionName={"Ім'я :"} sectionData={choosedUser.name} fieldType={'name'} reducerDispatch={reducerDispatch} state={state}/>
                        <UserInfoFieldComponent isEdit={isEdit} sectionName={"Прізвище :"} sectionData={choosedUser.surname} fieldType={'surname'} reducerDispatch={reducerDispatch} state={state}/>
                        <UserInfoFieldComponent isEdit={isEdit} sectionName={"Посада :"} sectionData={choosedUser.position} fieldType={'position'} reducerDispatch={reducerDispatch} state={state}/>

                    </div>
                    <div className={classes.contactData}>

                        <UserInfoFieldComponent isEdit={isEdit} sectionName={"email :"} sectionData={choosedUser.email} fieldType={'email'} reducerDispatch={reducerDispatch} state={state}/>
                        <UserInfoFieldComponent isEdit={isEdit} sectionName={"телефон :"} sectionData={choosedUser.phone} fieldType={'phone'} reducerDispatch={reducerDispatch} state={state}/>

                    </div>
                </div>
            </div>

        </div>
    )
}