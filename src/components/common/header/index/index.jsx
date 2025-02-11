import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from './index.module.scss';
import Logo from '../../logo/logo.jsx';
import Container from '../../container/container.jsx';
import Dropdown from '../../dropdown/index.jsx';
import SearchInput from '../../search/index.jsx';
import MobileMenu from "../../mobile-menu/index.jsx";
import RegistrationModal from '../../authentificate_modal/index.jsx';
import { useEffect } from "react";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState({ category: false, cart: false });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleDecrement = () => {
        setValue((prevValue) => Math.max(0, prevValue - 1));
    };

    const handleIncrement = () => {
        setValue((prevValue) => prevValue + 1);
    };

    const toggleDropdown = (menu) => {
        setIsDropdownOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (window.innerWidth < 968) {
                document.body.style.overflow = isDropdownOpen.cart ? "hidden" : "";
            } else {
                document.body.style.overflow = ""; // Сбрасываем при увеличении экрана
            }
        };

        handleOverflow(); // Запускаем при монтировании
        window.addEventListener("resize", handleOverflow);

        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [isDropdownOpen.cart]);
    const closeAllDropdowns = () => {
        setIsDropdownOpen({ category: false, cart: false });
    };

    const handleOrder = () => {
        navigate('/cart');
        closeAllDropdowns();
    };

    return (
        <header className={s.header}>
            <Container id="header">
                <div className={s.flex_container}>
                    <MobileMenu className={s.MobileMenu} />
                    <div className={s.logo}>
                        <Logo />
                    </div>
                    <SearchInput className={s.searchInput} />
                    {/* Dropdowns и другие элементы */}
                    <div className={s.controlBox}>
                        <Dropdown
                            button={
                                <svg className={s.cartButton} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 33C11.1046 33 12 32.1046 12 31C12 29.8954 11.1046 29 10 29C8.89543 29 8 29.8954 8 31C8 32.1046 8.89543 33 10 33Z" fill="black" />
                                    <path d="M23 33C24.1046 33 25 32.1046 25 31C25 29.8954 24.1046 29 23 29C21.8954 29 21 29.8954 21 31C21 32.1046 21.8954 33 23 33Z" fill="black" />
                                    <path d="M5.2875 13H27.7125L24.4125 24.55C24.2948 24.9692 24.0426 25.3381 23.6948 25.6001C23.3471 25.862 22.9229 26.0025 22.4875 26H10.5125C10.0771 26.0025 9.65293 25.862 9.30515 25.6001C8.95738 25.3381 8.70524 24.9692 8.5875 24.55L4.0625 8.725C4.0027 8.51594 3.8764 8.33207 3.70271 8.20125C3.52903 8.07042 3.31744 7.99977 3.1 8H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            isOpen={isDropdownOpen.cart}
                            toggleDropdown={() => toggleDropdown('cart')}
                            content={
                                <div className={s.cart}>
                                    <div className={s.cart_title}>
                                        <p>Кошик</p><span>(01)</span>
                                    </div>
                                    <hr />
                                    <ul className={s.items}>
                                        <li>
                                            <div className={s.product}>
                                                <img src="/images/ps.png" alt="" />
                                                <div>
                                                    <p className={s.product_title}>Samsung Electronics Samsung Galaxy S21 5G</p>
                                                    <span className={s.product_price}>22,300₴</span>
                                                </div>
                                            </div>
                                            <div className={s.productControls}>
                                                <div className={s.calculator}>
                                                    <div className={s.calculatorMinus} onClick={handleDecrement}>
                                                        -
                                                    </div>
                                                    <div className={s.calculatorInput}>
                                                        {value + 1}
                                                    </div>
                                                    <div className={s.calculatorPlus} onClick={handleIncrement}>
                                                        +
                                                    </div>
                                                </div>
                                                <button className={s.Button_Cart}>Видалити</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <hr />
                                    <div className={s.confirmOrder}>
                                        <div className={s.orderDetails}>
                                            <p className={s.orderDetails_title}>Разом:</p>
                                            <p className={s.orderDetails_price}>44,600₴</p>
                                        </div>
                                        <div className={s.orderButtons}>
                                            <button className={s.orderButtons_primary} onClick={handleOrder}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                                            <button className={s.orderButtons_secondary} onClick={closeAllDropdowns}>ПОВЕРНУТИСЬ ДО ПОКУПОК</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <Link to="/liked" onClick={closeAllDropdowns}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <div
                            className={s.user}
                            onClick={() => {
                                console.log('User icon clicked'); // Проверяем, срабатывает ли клик
                                setIsModalOpen(true); // Открываем модальное окно
                                closeAllDropdowns;
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </div>
                </div>
            </Container>
            {isModalOpen && (
                <RegistrationModal
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;
