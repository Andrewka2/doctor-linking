import React from 'react'
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import classes from './UserPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { thunkLogout } from "../../root/actions/userActions"

function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    function logOutHandler() {
        dispatch(thunkLogout())
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
                <div>
                    <button onClick={logOutHandler}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default UserPage