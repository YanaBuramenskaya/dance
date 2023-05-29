import React from 'react';
import { MdSportsMartialArts } from 'react-icons/md';
import {CgProfile} from 'react-icons/cg'

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <ul>
                    <li><CgProfile className='profile-icon'/></li>
                    <li><MdSportsMartialArts className='page-icon'/></li>
                    <li><a href = "/">Главная</a></li>
                    <li><a href = "/calendar">Календарь</a></li>
                </ul>
            </header>
        )
    }
}

export default Header
