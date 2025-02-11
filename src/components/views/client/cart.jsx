import React, { useState } from 'react';
import CrossCart from '/icon/XCircle.svg'
import Container from '../../common/container/container';
import CartBack from '/icon/left-cart.svg'

import s from './cart.module.scss'
import { Link } from 'react-router-dom';
const Cart = () => {
    const [modal, setModal] = useState(false)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: "/images/cart.png",
            name: "Samsung Electronics Samsung Galaxy S21 5G",
            price: { old: 99, current: 70 },
            quantity: 1,
            total: 70,
        },
        {
            id: 2,
            image: "/images/cart.png",
            name: "Samsung Electronics Samsung Galaxy S21 5G",
            price: { old: null, current: 250 },
            quantity: 3,
            total: 250,
        },
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + delta),
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const toggleModal = () => {
        setModal((prevModal) => !prevModal);
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = 24;
    const finalTotal = total - discount;

    return (
        <Container className={s.cart_padding}>
            <section id="order" className={s.order_container}>
                <h2 className={s.cart_title}>Кошик</h2>
                <div className={s.cartTable}>
                    <div className={s.cartHeader}>
                        <span className={s.cartHeader_product}>Продукт</span>
                        <span>Кількість</span>
                        <span>Ціна</span>
                    </div>
                    {cartItems.map((item) => (
                        <div key={item.id} className={s.cartRow}>
                            <div className={s.product}>
                                <button className={s.removeBtn} onClick={() => { removeItem(item.id) }}>
                                    <img src={CrossCart} alt="" />
                                </button>
                                <img src={item.image} alt={item.name} />
                                <span>{item.name}</span>
                            </div>
                            <div className={s.quantity}>
                                <button className={s.decrement} onClick={() => {
                                    updateQuantity(item.id, -1)
                                }}>-</button>
                                <input type="text" value={item.quantity} readOnly />
                                <button className={s.increment} onClick={() => {
                                    updateQuantity(item.id, +1)
                                }}>+</button>
                            </div>
                            <span className={s.sum}>{item.total * item.quantity}₴</span>
                        </div>
                    ))}
                </div>
                <div className={s.back}>
                    <Link to="/" className={s.back_link}>
                        <img src={CartBack} alt="" />
                        <span>Продовжити покупки</span>
                    </Link>
                </div>
            </section>
            <section id="summ" className={s.summ_container}>
                <h2 className={s.cart_title}>Сума замовлення</h2>
                <ul className={s.summ_list}>
                    <li>
                        <span>Сума</span> <p>$320</p>
                    </li>
                    <li>
                        <span>Доставка</span> <p>Безкоштовна</p>
                    </li>
                    <li>
                        <span>Знижка</span> <p>$24</p>
                    </li>
                </ul>
                <div className={s.summ_result}>
                    <p>Всього</p>
                    <p className={s.summ_result_bold}>44,600₴</p>
                </div>
                <div className={s.summ_confirm} onClick={toggleModal}>
                    <button>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                </div>
            </section>

            {modal && (
                <div className={s.modalOverlay}>
                    <div className={s.modalContent}>
                        <h3>Надішліть свої контакти і менеджер зв’яжеться з вами в найближчий час</h3>
                        <p className={s.modalContent_p}>Або напишіть нашому менеджеру</p>
                        <img src="/icon/logos_telegram.svg" alt="" className={s.modalContent_img} />
                        <div className={s.inputbox}>
                            <label className={s.inputbox_label}>Ваше ім’я</label>
                            <input type="text" className={s.inputbox_input} placeholder='Як вас звати?' />
                        </div>
                        <div className={s.inputbox}>
                            <label className={s.inputbox_label}>Ваш нік в телеграм або номер телефону</label>
                            <input type="text" className={s.inputbox_input} placeholder='@username або +380 (99) 999 99 99' />
                        </div>
                        <button><p>Надіслати</p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.125 10H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <div className={s.cross} onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default Cart;
