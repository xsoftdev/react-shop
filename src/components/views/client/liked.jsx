import Footer from '@/components/common/footer/index'
import Container from '@/components/common/container/container.jsx'
import s from './liked.module.scss'

import img from '/images/ps.png'
import cart from '/icon/cart.svg'
import cross from '/icon/XCircle.svg'
const ClientLiked = () => {
    return (
        <>
            <Container className={s.bordered_container}>
                <h2 className={s.title}>Список бажань</h2>
                <div className={s.info_bar}>
                    <p>ПРОДУКТ</p>
                    <p>ЦІНА</p>
                    <p>статус наявності</p>
                </div>
                <div className={s.items}>
                    <div className={s.item}>
                        <div className={s.flex_row}>
                            <img src={img} alt="" className={s.product_photo} />
                            <p className={s.product_name}>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black</p>
                        </div>
                        <div className={s.price}>
                            <span><stroke>$1299</stroke></span>
                            <p>$999</p>
                        </div>
                        <p className={s.status}>В НАЯВНОСТІ</p>
                        <div className={s.flex_row}>
                            <button>
                                <p>ДОДАТИ ДО КОШИКУ</p>
                                <img src={cart} alt="" />
                            </button>
                            <div className={s.remove}>
                                <img src={cross} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.flex_row}>
                            <img src={img} alt="" className={s.product_photo} />
                            <p className={s.product_name}>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black</p>
                        </div>
                        <div className={s.price}>
                            <span><stroke>$1299</stroke></span>
                            <p>$999</p>
                        </div>
                        <p className={s.status}>В НАЯВНОСТІ</p>
                        <div className={s.flex_row}>
                            <button>
                                <p>ДОДАТИ ДО КОШИКУ</p>
                                <img src={cart} alt="" />
                            </button>
                            <div className={s.remove}>
                                <img src={cross} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.flex_row}>
                            <img src={img} alt="" className={s.product_photo} />
                            <p className={s.product_name}>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black</p>
                        </div>
                        <div className={s.price}>
                            <span><stroke>$1299</stroke></span>
                            <p>$999</p>
                        </div>
                        <p className={s.status}>В НАЯВНОСТІ</p>
                        <div className={s.flex_row}>
                            <button>
                                <p>ДОДАТИ ДО КОШИКУ</p>
                                <img src={cart} alt="" />
                            </button>
                            <div className={s.remove}>
                                <img src={cross} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default ClientLiked;