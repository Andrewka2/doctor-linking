import React, { useState } from "react";
import classes from './DoctorRequest.module.scss';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
];

const doctors = [
    { value: 'Хірург', label: 'Хірург' },
    { value: 'Медсестра', label: 'Медсестра' },
    { value: 'Кардіолог', label: 'Кардіолог' },
];

export default function DoctorRequest() {
    let [value, setValue] = useState(null)
    let [doctor, setDoctor] = useState(null)
    const notify = (data) => toast(`Шкала ASA: ${value.value}. Діагноз: ${data.diagnosis}`);

    function handleChange(selectedOption) {
        setValue(selectedOption)
    };
    function handleDoctor(selectedOption) {
        setDoctor(selectedOption)
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function sendData(data){
        notify(data)
    }

    return (
        <div className={classes.doctorRequest}>
            <ToastContainer />
            <div className={classes.itemHeader}>
                <div className={classes.itemDate}>
                    <p>Взаємодії</p>
                </div>
            </div>
            <div className={classes.requestContentContainer}>
                <div className={classes.title}>
                    <h2>Формування запиту</h2>
                </div>
                <div className={classes.requestField}>
                    <form onSubmit={handleSubmit(data => sendData(data))}>
                        <div className={classes.fieldItem}>
                            <input placeholder="Ім'я пацієнта" {...register('PatientName')} />
                        </div>
                        <div className={classes.fieldCont}>
                            <div className={classes.fieldItem}>
                                <input placeholder="Діагноз" type="text" {...register('diagnosis')} />
                            </div>
                            <div className={classes.code}>
                                <input placeholder="Код МКХ" type="text" {...register('code')} />
                            </div>
                        </div>
                        <div className={classes.fieldItemDescribe}>
                            <textarea {...register('additionalInfo')} rows={4} placeholder="Додаткова інформація" type="text" />
                        </div>
                        <div className={classes.selectsCont}>
                            <div className={classes.doctorSelectCont} >
                                <Select
                                    value={doctor}
                                    onChange={handleDoctor}
                                    options={doctors}
                                    placeholder="Оберіть лікаря"
                                />
                            </div>
                            <div className={classes.dangerLvlCont}>
                                <Select
                                    value={value}
                                    onChange={handleChange}
                                    options={options}
                                    name={'Рівень небезпеки'}
                                    placeholder="Шкала ASA"
                                />
                            </div>
                        </div>
                        <div className={classes.send}>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}