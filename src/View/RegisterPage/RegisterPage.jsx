import React, { useState } from 'react'
import classes from './RegisterPage.module.scss'
import { useForm } from 'react-hook-form'
import Logo from '../../Components/Logo/Logo'
import Login from '../../Components/LoginComponent/Login'
import Registration from '../../Components/RegistrationComponent/Registration'

function RegisterPage() {

    let [isLogin, setIsLogin] = useState(false)

    function isLoginHandler() {
        setIsLogin(!isLogin)
    }

    return (
        <div className={classes.RegisterPage}>
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={isLogin ? [classes.leftBar, classes.isLoginLeftBar].join(' ') : classes.leftBar}>
                <div className={classes.container}>
                    <div className={classes.loginContent}>
                        <div className={classes.title}>
                            <p>Hellow There</p>
                        </div>
                        <div className={classes.subText}>
                            <p>some sub text</p>
                        </div>
                        <div className={classes.loginBtn}>
                            <input onClick={isLoginHandler} type="button" value={isLogin ? 'Register' : 'Sign In'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={isLogin ? [classes.registrationBar, classes.isLoginRegistrationBar].join(' ') : classes.registrationBar}>
                <div className={classes.container}>
                    <div className={isLogin ? classes.testVisibility : classes.testVisibility2}>
                    <div className={classes.title}>
                        <p>{isLogin ? 'Log in to you`r account' : 'Create Account'}</p>
                    </div>
                    <div className={classes.subText}>
                        <p>Paste all fields with required data</p>
                    </div>
                    <div className={classes.formWidth}>
                        {
                            isLogin ? <Login /> : <Registration />
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage