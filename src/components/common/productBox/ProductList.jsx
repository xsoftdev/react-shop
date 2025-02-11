import { useState, useEffect } from "react";
import Container from "../container/container";
import ProductCard from "../product";

import s from './index.module.scss';

const ProductList = ({ products }) => {
    const [visibleProducts, setVisibleProducts] = useState(10);

    useEffect(() => {
        const updateVisibleProducts = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setVisibleProducts(4);
            } else if (width <= 1440) {
                setVisibleProducts(6);
            } else {
                setVisibleProducts(10);
            }
        };

        updateVisibleProducts();
        window.addEventListener("resize", updateVisibleProducts);

        return () => {
            window.removeEventListener("resize", updateVisibleProducts);
        };
    }, []);

    return (
        <Container id="ProductList" className={s.grid}>
            {products.slice(0, visibleProducts).map((product, index) => (
                <ProductCard 
                    key={index} 
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    tags={product.tags}
                    rating={product.rating}
                    reviews={product.reviews}
                />
            ))}
        </Container>
    );
};

export default ProductList;
