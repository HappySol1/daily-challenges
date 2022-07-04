import React, { useState, useEffect } from "react";
import previous from './images/previous.svg'
import next from './images/next.svg'

import './stylescalendar.css'

export default function Day12() {


    let dt = new Date()
    let [CurrData, setCurData] = useState({ y: dt.getFullYear(), m: dt.getMonth() })
    let CurrMonth = new Date(CurrData.y, CurrData.m)

    let NextMonth = new Date(PlusMonth().y, PlusMonth().m)
    let PrevMonth = new Date(MinusMonth().y, MinusMonth().m)

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let today = new Date()
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate())


    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    function PlusMonth() {
        if (CurrData.m == 11) {
            return { y: CurrData.y + 1, m: 0 }
        } else {
            return { y: CurrData.y, m: CurrData.m + 1 }
        }
    }

    function MinusMonth() {
        if (CurrData.m == 0) {
            return { y: CurrData.y - 1, m: 11 }
        } else {
            return { y: CurrData.y, m: CurrData.m - 1 }
        }
    }

    function getDayofTheWeek(day) {
        if (day.getDay() == 0) {
            return 6
        } else {
            return day.getDay() - 1
        }
    }

    const arr = []

    for (let i = 0; i < getDayofTheWeek(CurrMonth); i++) {
        PrevMonth.setDate(PrevMonth.daysInMonth() - i)
        arr.push({ day: PrevMonth.daysInMonth() - i, isHoliday: 0, isToday: 0, isCurrMonth: 0 })
    }
    arr.reverse() //!!!!важно

    for (let i = 1; i <= CurrMonth.daysInMonth(); i++) {
        // console.log(CurrMonth);
        CurrMonth.setDate(i)
        // console.log(CurrMonth.getTime() == today.getTime());
        arr.push({ day: i, isHoliday: 0, isToday: CurrMonth.getTime() == today.getTime() ? 1 : 0, isCurrMonth: 1 })
    }
    if (getDayofTheWeek(NextMonth) != 0) {
        // console.log(getDayofTheWeek(NextMonth));
        let toPushInNextMonth = 7 - getDayofTheWeek(NextMonth)
        for (let i = 0; i < toPushInNextMonth; i++) {
            NextMonth.setDate(i)
            arr.push({ day: i + 1, isHoliday: 0, isToday: 0, isCurrMonth: 0 })
        }
    }
    let CurrMonthList = arr.map(item => <div className={(item.isToday ? 'today' : '') + (item.isCurrMonth ? '' : 'notCurrMonth')} key={item.day + '' + item.isCurrMonth}>{item.day}</div>)

    return <div className="calendarW">
        <div className="wrapper">

            <div className="previous">
                <img src={previous} onClick={() => setCurData({ y: MinusMonth().y, m: MinusMonth().m })} alt="Previous" />
            </div>

            <div className="currentData"><span className='year'>{CurrMonth.getFullYear()}</span><span className='month'>{monthNames[CurrMonth.getMonth()]}</span></div>

            <div className="next">
                <img src={next} onClick={() => setCurData({ y: PlusMonth().y, m: PlusMonth().m })} alt="Next" />
            </div>


            <div className="day-of-week">ПН</div>
            <div className="day-of-week">ВТ</div>
            <div className="day-of-week">СР</div>
            <div className="day-of-week">ЧТ</div>
            <div className="day-of-week">ПТ</div>
            <div className="day-of-week">СБ</div>
            <div className="day-of-week">ВС</div>

            {CurrMonthList}

        </div>
    </div >
}