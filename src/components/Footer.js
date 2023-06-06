import React from 'react';
import { MdSportsMartialArts } from 'react-icons/md';
import {CgProfile} from 'react-icons/cg'

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>

                <ul className="contacts">
                    <li>
                        <p>Адрес: дом, улица, Москва, РФ</p>
                    </li>
                    <li>
                        <p>Телефон: +7(ХХХ)-ХХХ-ХХХХ</p>
                    </li>
                    <li>
                        <p>Почта: yuorsemail@mail.ru</p>
                    </li>
                </ul>
                <div className="links">
                    <p>
                        We We are in social networks:
                        <a> instagram,</a>
                        <a> telegram,</a>
                        <a> VK.</a>
                    </p>
                </div>
                <div className="footer-copy">
                    <p>© 2023 AYADance. All rights reserved.</p>
                    <p>Powered by INBO-05-21 Team</p>
                </div>
            </footer>
        )
    }
}

export default Footer
