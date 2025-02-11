import s from './index.module.scss';
import Container from '../container/container.jsx';
import Social from './social.js';

const TopBar = () => {
    return (
        <div className={s.background}>
            <Container id="top-bar">
                <div className={s.TopBar}>
                    <h1>Ласкаво просимо в Кабель ЕлектроТехніка!</h1>
                    <ul className={s.TopBar_items}>
                        <span>Підпишіться на нас</span>
                        {Social.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={item.icon} alt={`Icon for ${item.link}`} className={s.icon}/>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
