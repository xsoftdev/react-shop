import s from './index.module.scss'
import { images } from './images';

const SubPhotos = () => {
    return (
        <>
            <div className={s.flex_column}>
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
            </div>
        </>
    )
}

export default SubPhotos;