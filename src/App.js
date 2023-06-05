import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Calendar from "./components/Calendar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ioga from './images/ioga.jpg'
import tansor from './images/tansor.jpg'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    id: 1,
                    title: 'Мы открылись!!!',
                    description: "УРА",
                    image: ioga
                },
                {
                    id: 2,
                    title: 'Мы открылись!!!',
                    description: "Приглашаем Вас окунуться в мир шестовой акробатики, танцев на пилоне и растяжки от профессионалов своего дела.\n" +
                        "\n" +
                        "Если вы искали для себя достойную школу танцев, то вы попали по адресу!\n" +
                        "\n" +
                        "Мы предоставляем услуги обучения танцам, групповые и индивидуальные занятия. Уроки танцев помогут вам получить хорошую физическую нагрузку и отличное настроение.\n" +
                        "\n" +
                        "Обучение танцам в - увлекательный процесс, который познакомит вас с различными танцевальными стилями.",
                    image: tansor
                }
            ]
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/" element={
                        <main>
                            <div className='beautiful-logo'>AYAdance</div>
                            <News news={this.state.news}/>
                        </main>}/>
                </Routes>
            </Router>
        )
            ;
    }
}

export default App;
