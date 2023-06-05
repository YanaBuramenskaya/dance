import React from 'react';
import calendpic from './calendpic.png'
import CalendarItem from "./CalendarItem";

class Calendar extends React.Component {
    render() {
        return (<div className="calendar-contain">
                {/*<img src={calendpic} alt='календарь'/>*/}
                <table>
                    <tr>
                        <td> </td>
                        <th> Понедельник </th>
                        <th> Вторник </th>
                        <th> Среда </th>
                        <th> Четверг </th>
                        <th> Пятница </th>
                        <th> Суббота </th>
                        <th> Воскресенье </th>
                    </tr>
                    <tr>
                        <td> 08:00 </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="black"/> </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="blue"/> </td>
                        <td>  </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> 10:00 </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="HotPink"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="green"/> </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> 12:00 </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="gray"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="yellow"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="MediumAquamarine"/> </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="blue"/> </td>
                    </tr>
                    <tr>
                        <td> 14:00 </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="violet"/> </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="purple"/> </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="yellow"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="pink"/> </td>
                    </tr>
                    <tr>
                        <td> 16:00 </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="RoyalBlue"/> </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="red"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="Chocolate"/> </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> 18:00 </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 12:00 до 13:00" color="black"/> </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="LemonChiffon"/> </td>
                        <td> <CalendarItem dance_style="Брейкданс" teacher="Анна Игоревна" time="с 10:00 до 11:00" room="Зал 1" color="Salmon"/> </td>
                    </tr>

                </table>

        </div>
        )
    }
}

export default Calendar
