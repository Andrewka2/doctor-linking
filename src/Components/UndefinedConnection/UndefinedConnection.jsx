import React from 'react'
import classes from './Undefined.module.scss'
import { useForm } from 'react-hook-form';

function UndefinedConnection({surgeonOperativeDataHandler}) {
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
        <div className={classes.patientCont}>
            <form onSubmit={handleSubmit((data,e) => handleSubmitData(data, e))}>
                <div className={classes.content}>
                    <div className={classes.itemStartData}>
                        <div className={classes.itemStartDataText}>
                            <p>Вік:</p>
                        </div>
                        <div className={classes.itemStartDataInput}>
                            <input placeholder="" type="text" {...register('age')} />
                        </div>
                    </div>
                    <div className={classes.itemStartData}>
                        <div className={[classes.itemStartDataText, classes.smallText].join(' ')}>
                            <p>Кг:</p>
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
                            <input placeholder="" type="text" {...register('time')} />
                        </div>
                    </div>
                </div>
                <div className={classes.medicineList}>
                    <div className={classes.medicineListCont}>
                        <div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Атропін:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('atropine')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Анальгін:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('analgin')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Димедрол:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('dimedrol')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Морфін:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('morphine')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Сібазон:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('siabzone')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                            <div className={classes.medicineItem}>
                                <div className={classes.medicineName}>
                                    <p>Кетамін:</p>
                                </div>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="text" {...register('ketamin')} />
                                </div>
                                <div className={classes.ml}>
                                    <p>мл</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.medicineCheckBoxCont}>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('fentanil')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Фентаніл</p>
                                </div>
                            </div>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('ketamin')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Кетамін</p>
                                </div>
                            </div>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('sevoran')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Севоран</p>
                                </div>
                            </div>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('tiopental')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Тіопентал</p>
                                </div>
                            </div>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('propofol')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Пропофол</p>
                                </div>
                            </div>
                            <div className={classes.medicineCheckItem}>
                                <div className={classes.medicineInput}>
                                    <input placeholder="" type="checkbox" {...register('all')} />
                                </div>
                                <div className={classes.medicineName}>
                                    <p>Все</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.tubesCont}>
                            <div className={classes.tubes}>
                                <div className={classes.medicineItem}>
                                    <div className={classes.medicineName}>
                                        <p>Інтубаційна трубка:</p>
                                    </div>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="text" {...register('intubationTube')} />
                                    </div>
                                </div>
                                <div className={classes.medicineItem}>
                                    <div className={classes.medicineName}>
                                        <p>Ларинальна маска:</p>
                                    </div>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="text" {...register('larinalMask')} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btnCont}>
                                <div className={classes.send}>
                                    <input type="submit" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default UndefinedConnection