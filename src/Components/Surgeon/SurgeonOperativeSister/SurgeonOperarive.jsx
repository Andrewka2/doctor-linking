import React, {useState} from "react";
import classes from './SurgeonOperative.module.scss'
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const doctors = [
    { value: 'Анестезіолог', label: 'Анестезіолог' },
    { value: 'Медсестра', label: 'Медсестра' },
];

export default function SurgeonOperative() {
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
        <div>
            <div className={classes.doctorSelectCont} >
                <Select
                    value={doctor}
                    onChange={handleDoctor}
                    options={doctors}
                    placeholder="Оберіть лікаря"
                />
            </div>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className={classes.fieldCont}>
                    <div className={classes.fieldItem}>
                        <input placeholder="Оперативне втручання" type="text" {...register('diagnosis')} />
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