import Categories from "../../common/categories/index.jsx";
import Footer from "../../common/footer/index.jsx";
import ProductBox from "../../common/productBox/index.jsx";

import products from "../../views/client/products.js";

const ClientCategories = () => {
    return (
        <>
            <Categories />
            <ProductBox title={'Популярні товари'} link={'#'} products={products} />
            <Footer />
        </>
    )
}
export default ClientCategories;