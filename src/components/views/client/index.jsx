import Benefits from "../../common/benefits/index.jsx";
import Categories from "../../common/categories/index.jsx";
import Footer from "../../common/footer/index.jsx";
import Hero from "../../common/hero/index.jsx";
import ProductBox from "../../common/productBox/index.jsx";

import products from "./products.js";
const ClientIndex = () => {
    return (
        <>
            <Hero />
            <Benefits />
            <Categories />
            <ProductBox title={'Популярні товари'} link={'#'} products={products}/>
            <ProductBox title={'Рекомендовані продукти'} link={'#'} products={products}/>
            <Footer />
        </>
    )
}

export default ClientIndex;