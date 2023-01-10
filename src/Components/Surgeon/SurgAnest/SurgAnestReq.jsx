import React, { useState } from "react";
import classes from './SurgAnest.module.scss';
import { useForm } from 'react-hook-form';

export default function SurgAnest({surgeonOperativeDataHandler}) {
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
        <div className={classes.Nurse}>
            <div className={classes.patientCont}>
                <form onSubmit={handleSubmit((data, e) => handleSubmitData(data,e))}>
                    <div className={classes.content}>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Оперативне втручання:</p>
                            </div>
                            <div className={classes.itemStartDataInputType}>
                                <input placeholder="" type="text" {...register('age')} />
                            </div>
                        </div>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Останній прийом їжі:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('wage')} />
                            </div>
                        </div>
                        <div className={[classes.itemStartData].join(' ')}>
                            <div className={[classes.itemStartDataText, classes.smallText].join(' ')}>
                                <p>Наявність аналізів:</p>
                            </div>
                            <div className={classes.itemStartDataCheckBox}>
                                <input className={classes.selectBox} placeholder="" type="checkbox" {...register('wage')} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.btnCont}>
                        <div className={classes.send}>
                            <input type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}