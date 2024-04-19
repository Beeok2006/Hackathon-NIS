import 'primeicons/primeicons.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';


const tabs = [
  {
    title: 'Home',
    icon: <i className="pi pi-camera" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    
    
  },
  {
    title: 'Map',
    icon: <input className='text-[#9f9f9f] bg-white' placeholder='Напишите cообщение ...'/>,
    
    
  },
  {
    title: 'Sos Page',
    icon: <i className="pi pi-send" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    
    
  },
  {
    title: 'Notifications',
    icon: <i className="pi pi-microphone" style={{ fontSize: '1.5rem', color: 'black' }}></i>,
    
    
  },
  

];

const Chatbar = () => {
    return (
        <div>
            {/* Bottom Tab Navigator*/}
            <nav className="navbar fixed-bottom bottom-[80px] navbar-light bg-white" role="navigation">
                <Nav className="w-100 rounded-[14px]" style={{boxShadow: '0px 0px 3px #bababa'}}>
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`}>
                                    <div  className="nav-link" >
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            {/* Используем тернарный оператор для проверки активной вкладки */}
                                            {tab.icon}
                                            
                                        </div>
                                    </div>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};

export default Chatbar;
