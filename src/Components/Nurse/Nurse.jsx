import React, { useState } from "react";

import classes from './Nurse.module.scss';
import { useForm } from 'react-hook-form';

export default function Nurse({surgeonOperativeDataHandler}) {
    let [dangerLvl, setDanger] = useState(null)
    function handleSubmitData(data, e){
        e.preventDefault()
        data.dangerLevel = dangerLvl
        surgeonOperativeDataHandler(data)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={classes.Nurse}>
            <div className={classes.patientCont}>
                <form onSubmit={handleSubmit((data,e) => handleSubmitData(data,e))}>
                    <div className={classes.content}>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Палата:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('room')} />
                            </div>
                        </div>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Паціент:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('patient')} />
                            </div>
                        </div>
                        <div className={[classes.itemStartData].join(' ')}>
                            <div className={[classes.itemStartDataText, classes.smallText].join(' ')}>
                                <p>Час:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('time')} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.medicineList}>
                        <div className={classes.itemStartDataText}>
                            <p>Рівень загрози:</p>
                        </div>
                        <div className={classes.dangerLevelDiv}>
                            <input 
                                onClick={() => setDanger('green')} 
                                type="button"
                                className={dangerLvl === 'green' ? [classes.dangerLevel0, classes.choosedDangerLevel0].join(' ') : classes.dangerLevel0}
                            />
                            <input 
                                onClick={() => setDanger('yellow')} 
                                type="button" 
                                className={dangerLvl === 'yellow' ? [classes.dangerLevel1, classes.choosedDangerLevel1].join(' ') : classes.dangerLevel1}
                            />
                            <input 
                                onClick={() => setDanger('red')} 
                                type="button" 
                                className={dangerLvl === 'red' ? [classes.dangerLevel2, classes.choosedDangerLevel2].join(' ') : classes.dangerLevel2}
                            />
                        </div>
                        <div>
                            <div className={classes.btnCont}>
                                <div className={classes.send}>
                                    <input type="submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}