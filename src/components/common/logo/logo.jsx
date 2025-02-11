import { Link } from 'react-router-dom';
import s from './index.module.scss';
import LogoIcon from '@/assets/images/logo.png'

const Logo = () => {
    return (
        <>
            <Link to={'/'}>
                <img src={LogoIcon} alt="" className={s.Logo}/>
            </Link>
            
        </>
    )
}

export default Logo;