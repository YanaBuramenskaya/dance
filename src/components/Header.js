import React from 'react';
import { MdSportsMartialArts } from 'react-icons/md';



class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <ul>
                    <li><MdSportsMartialArts className='page-icon'/></li>
                    <li><a href = "#">Главная</a></li>
                    <li><a href = "#">Календарь</a></li>
                </ul>
            </header>
        )
    }
}

export default Header