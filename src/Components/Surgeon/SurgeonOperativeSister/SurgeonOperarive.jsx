import React, { useState } from "react";
import classes from './SurgeonOperative.module.scss'
import { useForm } from 'react-hook-form';

export default function SurgeonOperative({surgeonOperativeDataHandler}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleSubmitData(data, e){
        e.preventDefault();
        surgeonOperativeDataHandler(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit((data,e) => handleSubmitData(data,e))}>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldItem}>
                        <input placeholder="Оперативне втручання" type="text" {...register('surgeryType')} />
                    </div>
                    <div className={classes.fieldItem}>
                        <input placeholder="Час" type="text" {...register('time')} />
                    </div>
                </div>
                <div className={classes.fieldItemDescribe}>
                    <textarea {...register('additionalInfo')} rows={4} placeholder="Додаткова інформація" type="text" />
                </div>
                <div className={classes.btnCont}>
                    <div className={classes.send}>
                        <input type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}