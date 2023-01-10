import React, { useEffect, useState } from "react"
import classes from './HistoryItem.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addConsultationData, addOperationsData } from "../../root/actions/historyActions"
import { historyConsultationData, historyOperationsData } from "../../config/history"

const historyType = [
    { value: 0, label: 'Консультації', fields: ['Дата/Час', 'Лікар', 'Посада', 'Діагноз'] },
    { value: 1, label: 'Операції', fields: ['Дата/Час', 'Анастезіолог', 'Хірург',  'Тип Операції']},
];

export default function HistoryItem() {
    const dispatch = useDispatch()
    const consultationData = useSelector((state) => state.history.consultationList)
    const operationsData = useSelector((state) => state.history.operationsList)
    let [consultationChoosed, switchConsultation] = useState(true)
    let [organisationChoosed, switchOrganisation] = useState(false)
    let [choosedCategoryId, switchCategoryId] = useState(0)
    let [consultationList, setConsultationList] = useState([])
    let [operationsList, setOperationsList] = useState([])

    useEffect(() => {
        setConsultationList(consultationData.historyList)
    }, [consultationData.historyList])
    
    useEffect(() => {
        setOperationsList(operationsData.historyList)
    }, [operationsData.historyList])

    function changeCategory(value){
        if(value === 0){
            switchConsultation(true)
            switchOrganisation(false)
        } else {
            switchOrganisation(true)
            switchConsultation(false)
        }
        switchCategoryId(value)
    }

    function setData(){
        dispatch(addConsultationData(historyConsultationData))
        dispatch(addOperationsData(historyOperationsData))
    }

    return (
        <div className={classes.body}>
            <div className={classes.filterDiv}>
                <div onClick={() => changeCategory(0)} className={consultationChoosed ? classes.chosenType : classes.typeChoice}>
                    <p>Консультації</p>
                </div>
                <div onClick={() => changeCategory(1)} className={organisationChoosed ? classes.chosenType : classes.typeChoice}>
                    <p>Операції</p>
                </div>
                <button onClick={() => setData()}>set data</button>
            </div>
            <div className={classes.categoryHeadingRow}>
                {historyType[choosedCategoryId].fields.map((elem, i)=> {
                    return (
                    <div className={classes.categoryHeading}>
                        <p className={classes.category}>{elem}</p>
                    </div>
                    )})
                }
            </div>
            <div className={classes.categoryDiv}>
            {consultationList.length > 0 && choosedCategoryId === 0 ? consultationList.map((elem, i)=> {
                    let date = new Date(elem.dateTime)
                    return (
                        <div key={`history-item-${i}`} className={classes.categoryRow}>
                            <div className={classes.consultCategoryValue}>
                                <p className={classes.consultValue}>{`${date.toLocaleDateString()}/${date.toLocaleTimeString()}`}</p>
                            </div>
                            <div className={classes.consultCategoryValue}>
                                <p className={classes.consultValue}>{elem.docName}</p>
                            </div>
                            <div className={classes.consultCategoryValue}>
                                <p className={classes.consultValue}>{elem.docType}</p>
                            </div>
                            <div className={classes.consultCategoryValue}>
                                <p className={classes.consultValue}>{elem.diagnosis}</p>
                            </div>
                        </div>
            )}) : operationsList.length > 0 &&  choosedCategoryId === 1 ? operationsList.map((elem, i) => {
                let date = new Date(elem.dateTime)
                return (
                    <div className={classes.categoryRow}>
                        <div className={classes.operaCategoryValue}>
                            <p className={classes.operaValue}>{`${date.toLocaleDateString()}/${date.toLocaleTimeString()}`}</p>
                        </div>
                        <div className={classes.operaCategoryValue}>
                            <p className={classes.operaValue}>{elem.petitioner}</p>
                        </div>
                        <div className={classes.operaCategoryValue}>
                            <p className={classes.operaValue}>{elem.personalType}</p>
                        </div>
                        <div className={classes.operaCategoryValue}>
                            <p className={classes.operaValue}>{elem.surgeryType}</p>
                        </div>
                    </div>
            )}) : null
            }
            </div>
        </div>
    )
}
