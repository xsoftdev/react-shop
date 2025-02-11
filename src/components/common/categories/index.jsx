import Container from "../container/container";
import CategorySlider from "./categorySlider";
import s from './index.module.scss'
const Categories = () => {
    return (
        <>
        <Container id="Categories" className={s.Categories}>
            <h1 className={s.title}>Купуйте по категоріям</h1>
            <CategorySlider/>
        </Container>
        </>
    )
}

export default Categories;