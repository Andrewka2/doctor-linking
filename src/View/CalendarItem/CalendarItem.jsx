import React, { useState } from "react"
import classes from './CalendarItem.module.scss'
import Select from 'react-select'
import arrow from '../../assets/arrow.png'
import ChooseFile from "../../Components/ChooseFileComponent/ChooseFile";

const options = [
    { value: 'Day', label: 'Day' },
    { value: 'Week', label: 'Week' },
    { value: 'Month', label: 'Month' },
];

export default function CalendarItem() {
    let [value, setValue] = useState(null)
    let [calendarData, setCalendarData] = useState(null)
    let [calendarNumberOfDate, setCalendarNumberOfDate] = useState(null)

    function calendarDataHandler(data){
        setCalendarData(data)
    }

    function handleChange(selectedOption) {
        setValue(selectedOption)
    };
    function handlerCalendarNumberOfDate(data){
        setCalendarNumberOfDate(data)
    }

    function setDate(data){
        let date = new Date(`October ${data}, 2022 03:24:00`)
        return ['Понеділок', 'Вівторок', 'Середа', 'Чертвер', 'Пятниця', 'Субота', 'Неділя'][date.getDay()]
    }

    return (
        <div className={classes.CalendarItem}>
            <div className={classes.itemHeader}>
                <div className={classes.itemDate}>
                    <p>October 2022</p>
                </div>
                <div className={classes.itemHeaderBtns}>
                    <div className={classes.chooseFile}>
                        <ChooseFile calendarDataHandler={calendarDataHandler} handlerCalendarNumberOfDate={handlerCalendarNumberOfDate}/>
                    </div>
                    <div className={classes.headerBtnSelect}>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <div className={classes.btnController}>
                        <div className={classes.btnLeft}>
                            <button><img src={arrow} alt="arrow" /></button>
                        </div>
                        <div className={classes.btnRight}>
                            <button><img src={arrow} alt="arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.monthDates}>
                    <div className={classes.empty}>

                    </div>
                    {
                        calendarNumberOfDate ? calendarNumberOfDate.map((elem, i)=>{
                            return <div className={classes.date}>
                            <div className={classes.dayNumber}>
                                <p>{elem.w}</p>
                            </div>
                            <div className={classes.day}>
                                <p>{setDate(elem.w)}</p>
                            </div>
                        </div> 
                        }) : null
                    }
                </div>
                {
                    calendarData ? calendarData.map((elem, i)=> {
                        return <div className={classes.calendarRowItem}>
                            {
                                elem.map((item, i)=>{

                                    return <div className={classes.taskCont}>
                                    <p>{item}</p>
                                </div>
                                })
                            }
                        
                        
                    </div>
                    }) : null
                }
                
            </div>
        </div>
    )
}