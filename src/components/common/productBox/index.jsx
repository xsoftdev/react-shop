import { Link } from "react-router-dom";
import Container from "../container/container";

import s from './index.module.scss';
import ProductList from "./ProductList";

const ProductBox = ({ title, link, products }) => {
    return (
        <Container id="ProductBox" className={s.productBox}>
            <div className={s.flex_container}>
                <h1 className={s.title}>{title}</h1>
                <Link to={link} className={s.link}>
                    <p>Переглянути всі продукти</p>
                    <img src="/icon/ArrowRight.svg" alt="" />
                </Link>
            </div>
            <ProductList products={products} />
            <Link to={link} className={s.link2}>
                <p>Переглянути всі продукти</p>
                <img src="/icon/ArrowRight.svg" alt="" />
            </Link>
        </Container>
    );
}

export default ProductBox;
