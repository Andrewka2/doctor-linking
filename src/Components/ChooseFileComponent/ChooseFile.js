import { useState } from "react";
import React from "react";
import * as XLSX from 'xlsx';
import classes from './ChooseFile.module.scss'
import { useDispatch } from 'react-redux'
import { addCalendarData } from "../../root/actions/calendarActions";

export default function ChooseFile({ calendarDataHandler, handlerCalendarNumberOfDate }) {
    let [file, setFile] = useState()
    const dispatch = useDispatch()

    async function sendFileHandler(e) {
        const file = e.target.files[0]
        setFile(e.target.files[0])
        const data = await file.arrayBuffer()
        const workBook = XLSX.read(data)
        const worksheet = workBook.Sheets[workBook.SheetNames[0]]

        const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1})

        var range = XLSX.utils.decode_range(worksheet['!ref']);
        let resultRange = []
        for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
            const secondCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: colNum })];
            if(typeof secondCell !== 'undefined' && !secondCell.hasOwnProperty('r')){
                resultRange.push(secondCell)
            }
        }

        dispatch(addCalendarData(resultRange, jsonData.slice(1)))
    }

    return (
        <div className={classes.fileUpLoad}>
            <label for="file-upload">
                <input id="file-upload" accept='.xlsx, .xls' onChange={sendFileHandler} name="select file" type={'file'} />
                <p>Додати</p>
            </label>
        </div>
    )
}