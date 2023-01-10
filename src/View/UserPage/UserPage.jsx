import React from 'react'
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import classes from './UserPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { thunkLogout } from "../../root/actions/userActions"
import { useState } from 'react'
import ChangePasswordForm from '../../Components/ChangePasswordForm/ChangePasswordForm'

function UserPage() {
    let [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    function logOutHandler() {
        dispatch(thunkLogout())
    }

    function openChangePasswordForm() {
        setOpenForm(!openForm)
    }

    return (
        <div className={classes.UserPage}>
            <PageHeader title={"Профіль"} />
            <div className={classes.userInfo}>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Ім'я:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.name}</p>
                    </div>
                </div>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Прізвище:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.surname}</p>
                    </div>
                </div>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Пошта:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Телефон:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.phone}</p>
                    </div>
                </div>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Посада:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.position}</p>
                    </div>
                </div>
                
            </div>
            <div className={classes.changePassCont}>
                {
                    user && user.isTemporary === false ? null : <p className={classes.temporaryPassword}>Ви повинні змінити тимчасовий пароль!!!</p>
                }
                <div className={classes.changePassword}>
                    <button onClick={openChangePasswordForm}>Змінити пароль</button>
                </div>
                {
                openForm ? <div className={classes.changePassFieldsCont}>
                    <ChangePasswordForm id={user.id} />
                </div> : null
                }
            </div>
            <div className={classes.logOutCont}>
                <button onClick={logOutHandler}>вийти з акаунту</button>
            </div>
        </div>
    )
}

export default UserPage