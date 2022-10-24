import React, { useState } from "react";
import classes from './Anest.module.scss';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import Nurse from "../Nurse/Nurse";
import SurgAnest from "../Surgeon/SurgAnest/SurgAnestReq";

const doctors = [
    { value: 'Анестезіолог', label: 'Анестезіолог' },
    { value: 'Медсестра', label: 'Медсестра' },
    { value: 'Хір-Анестезіолог', label: 'Хір-Анестезіолог' },
];

export default function Anest() {

    let [doctor, setDoctor] = useState(null)

    function handleDoctor(selectedOption) {
        setDoctor(selectedOption)
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={classes.Anest}>
            <div className={classes.doctorSelectCont} >
                <Select
                    value={doctor}
                    onChange={(item) => handleDoctor(item.value)}
                    options={doctors}
                    placeholder="Оберіть лікаря"
                />
            </div>
            {doctor === 'Медсестра' ? <Nurse/> : 
             doctor === 'Хір-Анестезіолог' ? <SurgAnest/> :
            <div className={classes.patientCont}>
                <form onSubmit={handleSubmit(data => console.log(data))}>
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
                                <input placeholder="" type="text" {...register('wage')} />
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
                                        <input placeholder="" type="text" {...register('atropine')} />
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
                                        <input placeholder="" type="text" {...register('atropine')} />
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
                                        <input placeholder="" type="text" {...register('atropine')} />
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
                                        <input placeholder="" type="text" {...register('atropine')} />
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
                                        <input placeholder="" type="text" {...register('atropine')} />
                                    </div>
                                    <div className={classes.ml}>
                                        <p>мл</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.medicineCheckBoxCont}>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Фентаніл</p>
                                    </div>
                                </div>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Кетамін</p>
                                    </div>
                                </div>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Севоран</p>
                                    </div>
                                </div>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Тіопентал</p>
                                    </div>
                                </div>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Пропофол</p>
                                    </div>
                                </div>
                                <div className={classes.medicineCheckItem}>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="checkbox" {...register('atropine')} />
                                    </div>
                                    <div className={classes.medicineName}>
                                        <p>Все</p>
                                    </div>
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
                                        <input placeholder="" type="text" {...register('atropine')} />
                                    </div>
                                </div>
                                <div className={classes.medicineItem}>
                                    <div className={classes.medicineName}>
                                        <p>Ларинальна маска:</p>
                                    </div>
                                    <div className={classes.medicineInput}>
                                        <input placeholder="" type="text" {...register('atropine')} />
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
                </form>
            </div>}
        </div>
    )
}