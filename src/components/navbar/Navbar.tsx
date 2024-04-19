import 'primeicons/primeicons.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';


const tabs = [
  {
    title: 'Home',
    icon: <i className="pi pi-home" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    activeIcon: <i className="pi pi-home" style={{ fontSize: '1.7rem', color: '#6a00ff' }}></i>,
    link: '/home'
  },
  {
    title: 'Map',
    icon: <i className="pi pi-map" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    activeIcon: <i className="pi pi-map" style={{ fontSize: '1.7rem', color: '#6a00ff' }}></i>,
    link: '/home/map'
  },
  {
    title: 'Notifications',
    icon: <i className="pi pi-bell" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    activeIcon: <i className="pi pi-bell" style={{ fontSize: '1.7rem', color: '#6a00ff' }}></i>,
    link: '/home/notifications'
  },
  {
    title: 'Sos Page',
    icon: <i className="pi pi-send" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    activeIcon: <i className="pi pi-envelope" style={{ fontSize: '1.7rem', color: '#6a00ff' }}></i>,
    link: '/home/help'
  },
  {
    title: 'Profile',
    icon: <i className="pi pi-user" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    activeIcon: <i className="pi pi-user" style={{ fontSize: '1.7rem', color: '#6a00ff' }}></i>,
    link: '/home/profile'
  }
];

const Navbar = () => {
    return (
        <div>
            {/* Bottom Tab Navigator*/}
            <nav className="navbar fixed-bottom navbar-light bg-white border-t border-gray-200" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.link} className="nav-link" >
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            {/* Используем тернарный оператор для проверки активной вкладки */}
                                            {window.location.pathname === tab.link ? tab.activeIcon : tab.icon}
                                            
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};

export default Navbar;
