import React, { useState } from 'react';
import s from './index.module.scss';

const RegistrationModal = ({ onClose }) => {
    const [modalType, setModalType] = useState('auth'); // Состояние для отслеживания типа модального окна

    const handleSwitch = (type) => {
        setModalType(type);
    };

    return (
        <div className={s.modalBackdrop} onClick={onClose}>
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри окна
            >
                <button className={s.closeButton} onClick={onClose}>
                    &times;
                </button>

                {/* Переключение между формами */}
                <div className={s.switchContainer}>
                    <div
                        className={`${s.switchOption} ${modalType === 'auth' ? s.active : ''}`}
                        onClick={() => handleSwitch('auth')}
                    >
                        Увійти
                    </div>
                    <div
                        className={`${s.switchOption} ${modalType === 'reg' ? s.active : ''}`}
                        onClick={() => handleSwitch('reg')}
                    >
                        Зареєструватись
                    </div>
                    <div
                        className={s.switchIndicator}
                        style={{
                            left: modalType === 'auth' ? '20px' : '200px',
                            width: '140px',
                        }}
                    />
                </div>

                {modalType === 'auth' && (
                    <form className={s.form}>
                        <label>
                            Електронна адреса
                            <input type="email" placeholder="Введіть вашу електронну адресу" required />
                        </label>
                        <label>
                            Пароль
                            <input type="password" placeholder="Введіть ваш пароль" required />
                        </label>
                        <button type="submit" className={s.submitButton}>
                            Увійти
                        </button>
                    </form>
                )}

                {modalType === 'reg' && (
                    <form className={s.form}>
                        <label>
                            Ім’я
                            <input type="text" placeholder="Введіть ваше ім’я" required />
                        </label>
                        <label>
                            Електронна адреса
                            <input type="email" placeholder="Введіть вашу електронну адресу" required />
                        </label>
                        <label>
                            Пароль
                            <input type="password" placeholder="Введіть ваш пароль" required />
                        </label>
                        <label>
                            Підтвердити пароль
                            <input type="password" placeholder="Повторіть пароль" required />
                        </label>
                        <button type="submit" className={s.submitButton}>
                            Зареєструватись
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationModal;
