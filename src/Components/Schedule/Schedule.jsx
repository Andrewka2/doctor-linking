import React, { useState } from "react";
import classes from './Schedule.module.scss';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import arrow from '../../assets/arrow.png';
import { useSelector } from 'react-redux'
import ChooseFile from "../../Components/ChooseFileComponent/ChooseFile";
import { useDispatch } from 'react-redux'
import { updateStatus, updateDate } from "../../root/actions/scheduleActions";
import { useEffect } from "react";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekDays = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Чертвер', 'Пятниця', 'Субота']
const shortWeekDays = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

const options = [
    { value: 'Day', label: 'Day' },
    { value: 'Week', label: 'Week' },
    { value: 'Month', label: 'Month' },
];

const validWeekDayStatus = [24, "24"]

let statuses = [{'В': 'Вихідний'}, {'7': '7 годин'}, {'12': '12 годин'}, {'24': '24 години'}, {'Н/З': 'Невідоме місцезнаходження'}, {'ЗСУ': 'ЗСУ'}]

export default function Schedule() {

    const scheduleData = useSelector((state) => state.schedule)
    const dispatch = useDispatch()

    let [selectedStatus, setSelectedStatus] = useState('')
    let [value, setValue] = useState(null)
    let [visibleData, setVisibleData] = useState(null)
    let [visibleRows, setVisibleRows] = useState(null)
    let [isModalOpen, setModalOpen] = useState(false)
    let [rowClicked, setRowClicked] = useState(false)
    
    useEffect(() => {
        console.log(scheduleData.chosenDate);
        defineData(scheduleData.rawData)
    }, [scheduleData])

    function defineData(input, selectedOption = value) {
        let tempInput
        if(selectedOption !== null && selectedOption.value === options[0].value){
            tempInput = generateCalendarData(input, getDay(scheduleData.chosenDate))
            visibleDataHandler(tempInput.displayData)
            visibleRowsHandler(tempInput.visibleRows)
        }
        if(selectedOption !== null && selectedOption.value === options[1].value){
            tempInput = generateCalendarData(input, getWeekDays(scheduleData.chosenDate))
            visibleDataHandler(tempInput.displayData)
            visibleRowsHandler(tempInput.visibleRows)
        }
        else if (selectedOption == null || selectedOption.value === options[2].value){
            tempInput = generateCalendarData(input, getMonthDays(scheduleData.chosenDate))
            visibleDataHandler(tempInput.displayData)
            visibleRowsHandler(tempInput.visibleRows)
        }
    }

    function visibleDataHandler(data){
        setVisibleData(data)
    }

    function visibleRowsHandler(rows){
        setVisibleRows(rows)
    }

    function handleChange(selectedOption) {
        setValue(selectedOption)
        defineData(scheduleData.rawData, selectedOption)
    };

    function switchModal(){
        setModalOpen(!isModalOpen)
    }

    function saveStatus(data){
        console.log(data.status);
        let newStatus = {}
        newStatus[data.status] = data.fullStatusDesc
        statuses.push(newStatus)
        switchModal()
    }

    function selectStatus(selectedStatus) {
        setSelectedStatus(selectedStatus)
    };

    function saveValue(calRow, i, selectedStatus){
        console.log(visibleRows[calRow].row + ' ' + i + ' ' + selectedStatus);
        dispatch(updateStatus(visibleRows[calRow].row, i, selectedStatus))
    }

    function prevRange() {
        let curDate = new Date(scheduleData.chosenDate)
        let newDate
        if(value !== null && value.value === options[0].value){
            newDate = curDate.getTime() - getDayTime()
        }
        if(value !== null && value.value === options[1].value){
            newDate = curDate.getTime() - getDayTime()*7
        }
        else if (value == null || value.value === options[2].value){
            newDate = curDate.setMonth(curDate.getMonth() - 1)
        }
        dispatch(updateDate(new Date(newDate)))
    }

    function nextRange() {
        let curDate = new Date(scheduleData.chosenDate)
        let newDate
        if(value !== null && value.value === options[0].value){
            newDate = curDate.getTime() + getDayTime()
        }
        if(value !== null && value.value === options[1].value){
            newDate = curDate.getTime() + getDayTime()*7
        }
        else if (value == null || value.value === options[2].value){
            newDate = curDate.setMonth(curDate.getMonth() + 1)
        }
        dispatch(updateDate(new Date(newDate)))
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function displayCalendar(inputData) {
        return inputData !== null ? inputData.map((row, calRow) => {
            return (
                <div className={value === null || value.value === options[2].value ? classes.calendarUserRow : classes.calendarUserRowWeek}>
                    {Object.values(row).map((item, i) => {
                        let date = new Date(inputData[0][i])
                        return (
                            <div
                            className={calRow === 0 ? [classes.calDateDivSpec, classes.calHeader].join(' ')
                            :([0, 6].includes(date.getDay()) && i !== 0) ? classes.calDateDivSpec : classes.calDateDiv}
                            onClick={() => calRow !== 0 && i !== 0 ? saveValue(calRow, date.toLocaleDateString(), selectedStatus) : null}
                            >
                                {(calRow === 0  && i !== 0) ? <p className={classes.calDate}>{date.getDate()}</p> : <p className={classes.calDate}>{item}</p>}
                                {(calRow === 0  && i !== 0) ? <p>{shortWeekDays[date.getDay()]}</p> : null}
                            </div>
                        )
                    })}
                </div>
            )
        }): null
    }

    return (
        <div className={classes.Body}>
            <div className={classes.itemDate}>
                <h1>{monthNames[new Date(scheduleData.chosenDate).getMonth()] + ' ' + new Date(scheduleData.chosenDate).getFullYear()}</h1>
            </div>
            <div className={classes.ScheduleHeader}>
                <div className={classes.rangeDiv}>
                    <h2 className={classes.headerHeading}>Період:</h2>
                    <div className={classes.rangeLeft}>
                        <button onClick={prevRange}><img src={arrow} alt="arrow" /></button>
                    </div>
                    <div className={classes.rangeSelect}>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <div className={classes.rangeRight}>
                        <button  onClick={nextRange}><img src={arrow} alt="arrow" /></button>
                    </div>
                </div>
                <div className={classes.statusBody}>
                    <h2 className={classes.headerHeading}>Статус:</h2>
                    <div className={classes.statusList}>
                        {statuses.map((item, i) => {
                            return (
                                <div className={selectedStatus === Object.keys(item)[0] ? [classes.statusDiv, classes.selectedStatusDiv].join(' ') : classes.statusDiv}
                                title={Object.values(item)[0]}
                                onClick={()=>{selectStatus(Object.keys(item)[0])}}>
                                    <p className={classes.status}>{Object.keys(item)[0]}</p>
                                </div>
                            )
                            })
                        }
                        <div onClick={switchModal} className={classes.defaultStatusDiv} title="Додати новий статус">
                            <p className={classes.defaultStatus}>+</p>
                        </div>
                    </div>
                    {isModalOpen ?
                    <div className={classes.modalDiv}>
                        <div className={classes.modalBackground}
                            onClick={switchModal}
                            >
                        </div>
                        <div className={classes.statusAddForm}>
                            <form onSubmit={handleSubmit(data => saveStatus(data))}>
                                <div className={classes.fieldCont}>
                                    <div className={classes.fieldItem}>
                                        <input placeholder="Абревіатура статусу" type="text" {...register('status')} />
                                    </div>
                                    <div className={classes.code}>
                                        <input placeholder="Опис статусу" type="text" {...register('fullStatusDesc')} />
                                    </div>
                                </div>
                                <div className={classes.send}>
                                    <input type="submit" value={'Зберегти'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    : null}
                </div>
                <div className={classes.headerImportDiv}>
                    <h2 className={classes.headerHeading}>Імпортувати файл:</h2>
                    <div className={classes.headerChooseFile}>
                        <ChooseFile calendarDataHandler={visibleDataHandler} handlerCalendarNumberOfDate={visibleRowsHandler}/>
                    </div>
                </div>
            </div>
            <div className={classes.scheduleCalendar}>
                <div className={classes.calendarUsers}>
                    {visibleData !== null ? displayCalendar(visibleData) : null}
                </div>
            </div>
        </div>
    )
}

function getDayTime() {
    return 3_600_000*24
}

function getDay(date){
    return ['', new Date(date).getTime()]
}

function getWeekDays(date){
    let res = []
    let dayOfWeek = new Date(date).getDay() - 1
    let weekStart = date - getDayTime()*dayOfWeek
    for (let i = 0; i <= 6; i++){
        res.push(weekStart + getDayTime()*i)
    }
    res.unshift('')
    return res
}

function getMonthDays(date) {
    let tempDate = new Date(date)
    let monthLength = new Date(tempDate.getFullYear(), tempDate.getMonth()+1, 0).getDate()
    let res = []
    for (let i = 1; i <= monthLength; i++){
        res.push(new Date(tempDate.getFullYear(), tempDate.getMonth(), i).getTime())
    }
    res.unshift('')
    return res
}

function generateCalendarData(unparsedData, days) {
    let fullCalendar = []
    let visibleRows = [{}]
    for(let i in unparsedData){
        fullCalendar.push(generateCalendarRow(unparsedData[i], days))
        visibleRows.push({row: i})
    }
    fullCalendar.unshift(days)
    return {'visibleRows': visibleRows, 'displayData': fullCalendar}
}

function generateCalendarRow(unparsedRow, days) {
    let result = {}
    for(let [key, value] of days.entries()){
        result[key] = unparsedRow[new Date(value).toLocaleDateString()] !== undefined ? unparsedRow[new Date(value).toLocaleDateString()] : ''
    }
    result[0] = unparsedRow[0]
    return result
}
