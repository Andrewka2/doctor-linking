import React from 'react'
import classes from './CreateUserForm.module.scss'
import { useForm } from 'react-hook-form'
import { Input } from '../../UI/Input/Input'
import { useDispatch } from 'react-redux'
import { thunkDoctorSignUp } from '../../root/actions/userActions'

function CreateUserFrom() {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    function registrationHandler(data) {
        dispatch(thunkDoctorSignUp(data))
    }

    return (
        <>
            <div className={classes.formItem}>
                <div className={classes.container}>
                    <form className={classes.form} onSubmit={handleSubmit((data) => registrationHandler(data))}>
                        <div className={classes.header}>
                            <div className={classes.btnSubmit}>
                                <input value={"Зберегти"} type="submit" />
                            </div>
                        </div>
                        <div className={classes.userDataContainer}>
                            <div className={classes.personalData}>
                                <div className={classes.inputCont}>
                                    <Input register={register} label={'name'} itemType={'name'} type={'registration'} placeholder={'Name'} />
                                    {
                                        errors.name?.type === 'required' && <p className={classes.errorMessage}>Name is required</p>
                                    }
                                </div>
                                <div className={classes.inputCont}>
                                    <Input register={register} label={'surname'} itemType={'name'} type={'registration'} placeholder={'Surname'} />
                                    {
                                        errors.surname?.type === 'required' && <p className={classes.errorMessage}>Surname is required</p>
                                    }
                                </div>
                                <div className={classes.inputCont}>
                                    <Input register={register} label={'position'} itemType={'name'} type={'registration'} placeholder={'Position'} />
                                    {
                                        errors.position?.type === 'required' && <p className={classes.errorMessage}>Position is required</p>
                                    }
                                </div>
                            </div>
                            <div className={classes.contactData}>
                                <div className={classes.inputCont}>
                                    <Input pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/} register={register}
                                        label={'email'} itemType={'email'} type={'registration'} placeholder={'Email'} />
                                    {
                                        errors.email?.type === 'required' && <p className={classes.errorMessage}>Email is required</p>
                                    }
                                    {
                                        errors.email?.type === 'pattern' && <p className={classes.errorMessage}>Wrong email format</p>
                                    }
                                </div>
                                <div className={classes.inputCont}>
                                    <Input register={register} label={'phone'} itemType={'name'} type={'registration'} placeholder={'Phone number'} />
                                    {
                                        errors.phone?.type === 'required' && <p className={classes.errorMessage}>Phone is required</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUserFrom