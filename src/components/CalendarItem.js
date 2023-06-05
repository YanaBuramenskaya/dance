import React from 'react';

class CalendarItem extends React.Component {

    lessonData = this.props


    render() {
        return (<div className="calendar-item">
                <ul>
                    <li className="color-line" style={{backgroundColor: this.props.color, color: this.props.color, height: '10px'}}></li>
                    <li>{this.lessonData.time}</li>
                    <li>{this.lessonData.room}</li>
                    <li> <br/> </li>
                    <li>{this.lessonData.dance_style}</li>
                    <li> <br/> </li>
                    <li> <br/> </li>
                    <li>{this.lessonData.teacher}</li>
                </ul>
        </div>
    )
    }
    }

    export default CalendarItem
