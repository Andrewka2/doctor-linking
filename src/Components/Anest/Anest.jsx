import React, { useState } from "react";
import classes from './Anest.module.scss';
import Select from 'react-select';

const doctors = [
    { value: 'Анестезіолог', label: 'Анестезіолог' },
    { value: 'Медсестра', label: 'Медсестра' },
];

export default function Anest() {

    let [doctor, setDoctor] = useState(null)

    function handleDoctor(selectedOption) {
        setDoctor(selectedOption)
    };

    return (
        <div className={classes.Anest}>
            <div className={classes.doctorSelectCont} >
                <Select
                    value={doctor}
                    onChange={handleDoctor}
                    options={doctors}
                    placeholder="Оберіть лікаря"
                />
            </div>
            <div className={classes.patientData}>
                
            </div>
        </div>
    )
}