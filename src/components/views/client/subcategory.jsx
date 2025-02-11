import Container from "../../common/container/container";
import Footer from "../../common/footer";
import products from "../../../components/views/client/products.js";
import ProductCard from "../../common/product/index.jsx";
import s from "./ClientSubcategory.module.scss"; // Добавлен импорт стилей
import { useState } from "react";
const ClientSubcategory = () => {
    const [visibleProducts, setVisibleProducts] = useState(10);


    return (
        <>
            <Container>
                <h3 className={s.title}>Кабелі та дроти</h3>
                <div className={s.grid}>
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
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default ClientSubcategory;