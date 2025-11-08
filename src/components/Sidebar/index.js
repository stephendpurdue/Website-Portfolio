import './styles.scss'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo"/>
            <img src={LogoSubtitle} alt="LogoSubtitle"/>
        </Link>
    </div>
)

export default Sidebar