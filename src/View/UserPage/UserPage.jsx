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
                <div className={classes.fieldCont}>
                    <div className={classes.fieldName}>
                        <p>Прізвище:</p>
                    </div>
                    <div className={classes.userData}>
                        <p>{user.surname}</p>
                    </div>
                </div>
                <div className={classes.changePassword}>
                    <button onClick={openChangePasswordForm}>change password</button>
                </div>
                {
                    openForm ? <div>
                        <ChangePasswordForm id={user.id}/>
                    </div> : null
                }
                <div>
                    <button onClick={logOutHandler}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default UserPage