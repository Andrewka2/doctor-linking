import React, { useState } from "react";
import classes from './Nurse.module.scss';
import { useForm } from 'react-hook-form';

export default function Nurse() {

    let [doctor, setDoctor] = useState(null)
    let [dangerLvl, setDanger] = useState(null)

    function handleDoctor(selectedOption) {
        setDoctor(selectedOption)
    };

    function changeDangerLevel(value){
        setDanger(value)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={classes.Nurse}>
            <div className={classes.patientCont}>
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <div className={classes.content}>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Палата:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('age')} />
                            </div>
                        </div>
                        <div className={classes.itemStartData}>
                            <div className={classes.itemStartDataText}>
                                <p>Паціент:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('wage')} />
                            </div>
                        </div>
                        <div className={[classes.itemStartData].join(' ')}>
                            <div className={[classes.itemStartDataText, classes.smallText].join(' ')}>
                                <p>Час:</p>
                            </div>
                            <div className={classes.itemStartDataInput}>
                                <input placeholder="" type="text" {...register('wage')} />
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