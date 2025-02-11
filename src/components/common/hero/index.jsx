import Container from "../container/container";
import s from './index.module.scss'

import CustomSlider from "./custom-slider.jsx";
import SubPhotos from "./sub-photos.jsx";
const Hero = () => {
    return (
        <>
            <Container>
                <div className={s.hero_container}>
                    <CustomSlider />
                    <SubPhotos />
                </div>
            </Container>
        </>
    )
}
export default Hero;