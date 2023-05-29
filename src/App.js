import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Calendar from "./components/Calendar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    id: 1,
                    title: 'Мы открылись!!!',
                    description: "УРА"
                },
                {
                    id: 2,
                    title: 'Скидочки',
                    description: "УРА"
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
                            <News news={this.state.news}/>
                        </main>}/>
                </Routes>
            </Router>
        )
            ;
    }
}

export default App;
