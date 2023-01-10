import React, {useState} from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { thunkOperationData } from '../../../root/actions/historyActions';
import SurgAnest from '../SurgAnest/SurgAnestReq';
import SurgeonOperative from '../SurgeonOperativeSister/SurgeonOperarive';
import classes from './Surgeon.module.scss';

const doctors = [
    { value: 'Анестезіолог', label: 'Анестезіолог' },
    { value: 'Медсестра', label: 'Медсестра' },
];

function Surgeon({user}) {
    let dispatch = useDispatch()
    let [doctor, setDoctor] = useState(null)
    let [surgeonOperativeData, setSurgeonOperativeData] = useState({})
    let surgeonOperativeDataHandler = useCallback((data)=>{
        setSurgeonOperativeData(data)
        dispatch(thunkOperationData({requestData: {...data}, petitionerId: user.id, petitioner: `${user.name} ${user.surname}`,
        position: user.position, personalType: doctor.value, dateTime: Date.now()}))
    }, [surgeonOperativeData, doctor])

    function handleDoctor(selectedOption) {
        setDoctor(selectedOption.value)
    };

    return (
        <div>
            <div className={classes.doctorSelectCont} >
                <Select
                    value={doctor}
                    onChange={handleDoctor}
                    options={doctors}
                    placeholder = {doctor ? doctor : "Оберіть лікаря"} 
                />
            </div>
            {
                doctor === 'Медсестра' ? <SurgeonOperative surgeonOperativeDataHandler={surgeonOperativeDataHandler}/> : <SurgAnest surgeonOperativeDataHandler={surgeonOperativeDataHandler}/>
            }
        </div>
    )
}

export default Surgeon