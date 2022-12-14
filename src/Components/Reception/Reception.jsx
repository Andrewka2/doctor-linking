import React, { useState } from "react";
import classes from './Reception.module.scss';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { addReceptionData } from "../../root/actions/receptionActions";
import { thunkOperationData } from '../../root/actions/historyActions';

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

export default function Reception({ user }) {
    const dispatch = useDispatch()
    let [value, setValue] = useState(null)
    let [doctor, setDoctor] = useState(null)
    function sendData(data) {
        data.scaleASA = value.value
        dispatch(thunkOperationData({
            requestData: { ...data }, petitionerId: user.id, petitioner: `${user.name} ${user.surname}`,
            position: user.position, personalType: doctor.value, dateTime: Date.now()
        }))
    };

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

    return (
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
    )
}