import React, { useState } from "react";
import classes from './Schedule.module.scss';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import arrow from '../../assets/arrow.png';
import { useSelector } from 'react-redux'
import ChooseFile from "../../Components/ChooseFileComponent/ChooseFile";
import { useDispatch } from 'react-redux'
import { updateStatus } from "../../root/actions/scheduleActions";
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

    const scheduleData = useSelector((state) => state.schedule.rawData)
    const dispatch = useDispatch()

    let [selectedStatus, setSelectedStatus] = useState('')
    let [value, setValue] = useState(null)
    let [data, setNewData] = useState(null)
    // let [curDate, setDate] = useState(new Date())
    let [curDate, setDate] = useState(new Date('2022/10/01'))
    let [visibleData, setVisibleData] = useState(null)
    let [visibleRows, setVisibleRows] = useState(null)

    let weekStart = getWeekStart(curDate).getDate()
    Array.from({length: 8}, (_, i) => {
        console.log('day');
        console.log(i + weekStart - 1);
        return i + weekStart - 1})
    
    let [calendarNumberOfDate, setCalendarNumberOfDate] = useState([])
    let [calendarData, setCalendarData] = useState(null)
    
    useEffect(() => {
        setNewData(scheduleData)
        if(visibleData == null){
            let tempData = generateCalendarData(scheduleData, getMonthDays(curDate))
            setVisibleData(tempData.displayData)
            setVisibleRows(tempData.visibleRows)
        }
        else{
            defineData(scheduleData)
        }
    }, [scheduleData])

    function defineData(input = data, selectedOption = value) {
        let tempInput
        if(selectedOption !== null && selectedOption.value === options[0].value){
            tempInput = generateDayData(input, curDate)
            updateVisibleData(tempInput.displayData, tempInput.visibleRows)
        }
        if(selectedOption !== null && selectedOption.value === options[1].value){
            tempInput = generateWeekData(input, curDate)
            updateVisibleData(tempInput.displayData, tempInput.visibleRows)
        }
        else if (selectedOption == null || selectedOption.value === options[2].value){
            tempInput = generateCalendarData(input, getMonthDays(curDate))
            updateVisibleData(tempInput.displayData, tempInput.visibleRows)
        }
    }

    function updateVisibleData(data, rows) {
        setVisibleRows(rows)
        setVisibleData(data)
    }

    function handleChange(selectedOption) {
        setValue(selectedOption)
        defineData(data, selectedOption)
    };

    function selectStatus(selectedStatus) {
        setSelectedStatus(selectedStatus)
    };

    function calendarDataHandler(data){
        setCalendarData(data)
    }
    
    function handlerCalendarNumberOfDate(data){
        setCalendarNumberOfDate(data)
    }

    function saveValue(calRow, i, selectedStatus){
        console.log(visibleRows[calRow].row + ' ' + i + ' ' + selectedStatus);
        dispatch(updateStatus(visibleRows[calRow].row, i, selectedStatus))
    }

    function prevMonth() {
        setDate(new Date(curDate.setMonth(curDate.getMonth()-1)))
        dispatch(updateStatus(1, 1, 'qwe'))
    }

    function nextMonth() {
        setDate(new Date(curDate.setMonth(curDate.getMonth()+1)))
        dispatch(updateStatus(1, 1, 'qwe'))
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
                        let dateToUpdate = new Date(curDate.getFullYear(), curDate.getMonth(), Object.keys(row)[i]).getDate()
                        let dayOfWeek = new Date(curDate.getFullYear(), curDate.getMonth(), Object.keys(row)[i]).getDay()
                        return (
                            <div
                            className={calRow === 0 ? [classes.calDateDivSpec, classes.calHeader].join(' ')
                            :([0, 6].includes(dayOfWeek) && i !== 0) ? classes.calDateDivSpec : classes.calDateDiv}
                            onClick={() => calRow !== 0 && i !== 0 ? saveValue(calRow, dateToUpdate, selectedStatus) : null}
                            >
                                <p className={classes.calDate}>{item}</p>
                                {(calRow === 0  && i !== 0) ? <p>{shortWeekDays[new Date(curDate.getFullYear(), curDate.getMonth(), item).getDay()]}</p> : null}
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
                <h1>{monthNames[curDate.getMonth()] + ' ' + curDate.getFullYear()}</h1>
            </div>
            <div className={classes.ScheduleHeader}>
                <div className={classes.rangeDiv}>
                    <h2 className={classes.headerHeading}>Період:</h2>
                    <div className={classes.rangeLeft}>
                        <button onClick={prevMonth}><img src={arrow} alt="arrow" /></button>
                    </div>
                    <div className={classes.rangeSelect}>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <div className={classes.rangeRight}>
                        <button  onClick={nextMonth}><img src={arrow} alt="arrow" /></button>
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
                        <div className={classes.defaultStatusDiv} title="Додати новий статус">
                            <p className={classes.defaultStatus}>+</p>
                        </div>
                    </div>
                </div>
                <div className={classes.headerImportDiv}>
                    <h2 className={classes.headerHeading}>Імпортувати файл:</h2>
                    <div className={classes.headerChooseFile}>
                        <ChooseFile calendarDataHandler={calendarDataHandler} handlerCalendarNumberOfDate={handlerCalendarNumberOfDate}/>
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

function getWeekStart(date){
    let dayOfWeek = date.getDay() - 1
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);
}

function getMonthDays(date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
}

function generateCalendarData(unparsedData, days) {
    let fullCalendar = []
    let visibleRows = [{}]
    let calDays = generateCalendarRow([...Array(days + 1).keys()], days)
    calDays[0] = ''
    fullCalendar.push(calDays)
    for(let i in unparsedData){
        fullCalendar.push(generateCalendarRow(unparsedData[i], days))
        visibleRows.push({row: i})
    }
    console.log(fullCalendar);
    return {'visibleRows': visibleRows, 'displayData': fullCalendar}
}

function generateWeekData(unparsedData, curDate){
    let weekStart = getWeekStart(curDate).getDate()
    let weekEnd = weekStart + 6
    let calDays = generateCalendarRow(Array.from({length: 8}, (_, i) => i + weekStart - 1), 7)
    calDays[0] = ''
    return generateNonEmptyList(unparsedData, weekStart, weekEnd, calDays);
}

function generateDayData(unparsedData, curDate){
    let day = curDate.getDate()
    let calDays = generateCalendarRow(Array.from({length: 2}, (_, i) => i + day - 1), 1)
    calDays[0] = ''
    return generateNonEmptyList(unparsedData, day, day, calDays);
}

function generateCalendarRow(unparsedRow, days) {
    let calendarRow = [...Array(days + 1)]
    let result = {}
    for(let i in calendarRow){
        result[i] = unparsedRow[i] !== undefined ? unparsedRow[i] : ''
    }
    return result
}

function generateNonEmptyList(unparsedRow, start, end, calDays){
    let result = []
    result.push(calDays)
    let visibleRows = [{}]
    let include = 0
    unparsedRow.map((item, index) => {
        include = 0
        for(let i = start; i <= end; i++){
            if(validWeekDayStatus.includes(item[i])){
                include = 1
            }
        }
        if(include === 1) {
            result.push({})
            let lastItem = result.length - 1
            result[lastItem][0] = item[0]
            for(let i = start; i <= end; i++){
                result[lastItem][i] = item[i]
            }
            visibleRows.push({row: index})
        }
    })
    console.log(result);
    return {'visibleRows': visibleRows, 'displayData': result}
}
