import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import classes from './Login.module.scss'
import { Input } from '../../UI/Input/Input'
import { thunkLogin, verify } from '../../root/actions/userActions'
import { useDispatch } from 'react-redux'
import ReCAPTCHA from 'react-google-recaptcha'

function Login() {

    const dispatch = useDispatch()
    const [captcha, setCaptcha] = useState(null)
    const [captchaError, setCaptchaError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    async function onCaptchaChange(value) {
        let result = await verify(value)
        if(!result){
            setCaptchaError(true)
            return
        }
        setCaptcha(value)
        setCaptchaError(false)
    }

    async function loginUserHandler(payload) {
        if (captcha) {
            dispatch(thunkLogin(payload))
            setCaptchaError(false)
        }else{
            setCaptchaError(true)
        }
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit((data) => loginUserHandler(data))}>
            <div className={classes.inputCont}>
                <Input pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
                    register={register} label={'email'} itemType={'email'} type={'registration'} placeholder={'Email'} />
                {
                    errors.email?.type === 'required' && <p className={classes.errorMessage}>Email is required</p>
                }
                {
                    errors.email?.type === 'pattern' && <p className={classes.errorMessage}>Wrong email format</p>
                }
            </div>
            <div className={classes.inputCont}>
                <Input pattern={/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,16})/}
                    register={register} label={'password'} itemType={'name'} type={'registration'} placeholder={'Password'} />
                {
                    errors.password?.type === 'required' && <p className={classes.errorMessage}>Password is required</p>
                }
                {
                    errors.password?.type === 'pattern' && <p className={classes.errorMessage}>Wrond password format</p>
                }
            </div>
            <ReCAPTCHA
                sitekey="6LcoDt0iAAAAAGedNHveVaYVXZ_PXiOdMIsfwsYA"
                onChange={onCaptchaChange}
            />
            {
                captchaError ? <p className={classes.errorMessage}>captcha is required</p> : null
            }
            <div className={classes.btnSubmit}>
                <input type="submit" />
            </div>
        </form>
    )
}

export default Login