import React from 'react';
import calendpic from './calendpic.png'

class Calendar extends React.Component {
    render() {
        return (<div className="calendar-contain">
                <img src={calendpic} alt='календарь'/>

        </div>
        )
    }
}

export default Calendar
