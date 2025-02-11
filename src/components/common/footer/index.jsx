import Container from '../container/container'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'

import s from './index.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <Container className={s.flex_container}>
                    <ul className={s.footer_list}>
                        <li className={s.logoItem}>
                            <Logo />
                        </li>
                        <li>
                            КабельЕлектроТехніка є провідною компанією, акредитованою до продажу підприємствам концерну «Укроборонпрому» кабельно-провідникової та електротехнічної продукції. У нас найбільший склад кабельно-провідникової та електротехнічної продукції у Черкаській та інших областях. Ми є представниками заводу Південкабель.
                        </li>
                    </ul>
                    <ul className={s.footer_list}>
                        <span className={s.footer_list_title}>Популярні категорії</span>
                        <li>Категорія 1</li>
                        <li>Категорія 2</li>
                        <li>Категорія 3</li>
                        <li>Категорія 4</li>
                    </ul>
                    <ul className={s.footer_list}>
                        <span className={s.footer_list_title}>Оплата</span>
                        <li>Безготівковий розрахунок</li>
                        <li>Безготівковий розрахунок з ПДВ 2</li>
                    </ul>
                    <ul className={s.footer_list}>
                        <span className={s.footer_list_title}>Контакти</span>
                        <li><a href="tel:(0472)66-66-18">
                            (0472)66-66-18</a></li>
                        <li><a href="tel:(0472)65-47-07">
                            (0472)65-47-07</a></li>
                        <li><a href="email:kaeltech@ukr.net">
                            kaeltech@ukr.net
                        </a></li>
                        <li>г.Черкассы, пр.Химиков, 1</li>
                    </ul>
                </Container>
                <Container className={`${s.clientarea}`}>
                    <p>                    Запрошуємо покупців з усієї України ознайомитися з нашим каталогом товарів зокрема асортиментом кабельної продукції. Наша компанія спеціалізується на продажі та доставці силових, високовольтних кабелях.
                    </p>
                    <div className={s.flex_container}>
                        <Link to="/about_us">
                            <p>Про нас</p>
                        </Link>
                        <Link to="/legal">
                            <p>Умови співпраці</p>
                        </Link>
                    </div>
                </Container>
            </footer>
            <div className={s.rights}>
                <p>© 2024 КабельЕлектроТехнiка   | All rights raserved</p>
            </div>
        </>
    )
}

export default Footer