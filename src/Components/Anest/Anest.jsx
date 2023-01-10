import React, { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import classes from './Anest.module.scss';
import Select from 'react-select';
import Nurse from "../Nurse/Nurse";
import SurgAnest from "../Surgeon/SurgAnest/SurgAnestReq";
import UndefinedConnection from "../UndefinedConnection/UndefinedConnection";
import { thunkOperationData } from '../../root/actions/historyActions';

const doctors = [
    { value: 'Анестезіолог', label: 'Анестезіолог' },
    { value: 'Медсестра', label: 'Медсестра' },
    { value: 'Хір-Анестезіолог', label: 'Хір-Анестезіолог' },
];

export default function Anest({user}) {
    let dispatch = useDispatch()
    let [doctor, setDoctor] = useState(null)
    let [anestData, setAndestData] = useState({})
    function handleDoctor(selectedOption) {
        setDoctor(selectedOption)
    };
    let surgeonOperativeDataHandler = useCallback((data)=>{
        setAndestData(data)
        dispatch(thunkOperationData({requestData: {...data}, petitionerId: user.id, petitioner: `${user.name} ${user.surname}`,
        position: user.position, personalType: doctor.value, dateTime: Date.now()}))
    }, [anestData, doctor])

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
            {doctor === 'Медсестра' ? <Nurse surgeonOperativeDataHandler={surgeonOperativeDataHandler}/> : 
             doctor === 'Хір-Анестезіолог' ? <SurgAnest surgeonOperativeDataHandler={surgeonOperativeDataHandler}/> : <UndefinedConnection surgeonOperativeDataHandler={surgeonOperativeDataHandler}/>
            }
        </div>
    )
}