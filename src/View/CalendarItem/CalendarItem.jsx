import React, { useEffect, useState } from "react"
import classes from './CalendarItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Schedule from "../../Components/Schedule/Schedule";

export default function CalendarItem() {
    const calendarRange = useSelector((state) => state.calendar.calendarRange)
    const rawItems = useSelector((state) => state.calendar.rawItems)
    let [calendarData, setCalendarData] = useState(null)
    let [calendarNumberOfDate, setCalendarNumberOfDate] = useState([])

    useEffect(() => {
        setCalendarNumberOfDate(calendarRange)
    }, [calendarRange])
    
    useEffect(() => {
        setCalendarData(rawItems)
    }, [rawItems])

    

    function setDate(data){
        let date = new Date(`October ${data}, 2022 03:24:00`)
        return ['Понеділок', 'Вівторок', 'Середа', 'Чертвер', 'Пятниця', 'Субота', 'Неділя'][date.getDay()]
    }

    return (
        <div className={classes.CalendarItem}>
            <div className={classes.itemHeader}>
            </div>
            <Schedule/>
        </div>
        //     <div className={classes.content}>
        //         <div className={classes.monthDates}>
        //             {
        //                 calendarNumberOfDate.length !== 0 ? <div className={classes.empty}> </div> : null  
        //             }
        //             {
        //                 calendarNumberOfDate ? calendarNumberOfDate.map((elem, i)=>{
        //                     return <div className={classes.date}>
        //                     <div className={classes.dayNumber}>
        //                         <p>{elem.w}</p>
        //                     </div>
        //                     <div className={classes.day}>
        //                         <p>{setDate(elem.w)}</p>
        //                     </div>
        //                 </div> 
        //                 }) : null
        //             }
        //         </div>
        //         {
        //             calendarData ? calendarData.map((elem, i)=> {
        //                 return <div className={classes.calendarRowItem}>
        //                     {
        //                         elem.map((item, i)=>{

        //                             return <div className={classes.taskCont}>
        //                             <p>{item}</p>
        //                         </div>
        //                         })
        //                     }
                        
                        
        //             </div>
        //             }) : null
        //         }
                
        //     </div>
        // </div>
    )
}
