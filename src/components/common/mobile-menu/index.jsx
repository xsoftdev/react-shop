import Menu from '../../../assets/icons/menu.svg'
import s from './index.module.scss'
const MobileMenu = ({className}) => {
    return (
        <>
            <div className={`${s.Menu} ${className}`}>
                <img src={Menu} />
            </div>
        </>
    )
}
export default MobileMenu;