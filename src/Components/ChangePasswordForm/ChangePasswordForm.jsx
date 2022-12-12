import React from 'react'
import { Input } from '../../UI/Input/Input'
import { useForm } from 'react-hook-form'
import classes from './ChangePass.module.scss'
import { useDispatch } from 'react-redux'
import { thunhChangePassword } from '../../root/actions/userActions'

function ChangePasswordForm(id) {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    function changePasswordHandler(data) {
        dispatch(thunhChangePassword(data.oldPassword, data.newPassword))
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit((data) => changePasswordHandler(data))}>
            <div>
                <Input pattern={/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,16})/}
                    register={register} label={'oldPassword'} itemType={'name'} type={'registration'} placeholder={'Old Password'} />
                {
                    errors.oldPassword?.type === 'required' && <p className={classes.errorMessage}>Password is required</p>
                }
                {
                    errors.oldPassword?.type === 'pattern' && <p className={classes.errorMessage}>Wrond password format</p>
                }
            </div>
            <div>
                <Input pattern={/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,16})/}
                    register={register} label={'newPassword'} itemType={'name'} type={'registration'} placeholder={'New Password'} />
                {
                    errors.newPassword?.type === 'required' && <p className={classes.errorMessage}>Password is required</p>
                }
                {
                    errors.newPassword?.type === 'pattern' && <p className={classes.errorMessage}>Wrond password format</p>
                }
            </div>
            <div className={classes.btnSubmit}>
                <input type="submit" />
            </div>
        </form>
    )
}

export default ChangePasswordForm