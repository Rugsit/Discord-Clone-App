import '../App.css';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useState } from 'react';
import { ReactComponent as Discord_logo} from '../images/discord-logo.svg'
import { ReactComponent as Arrow_right} from '../images/arrow.svg'
import { ReactComponent as Download_icon} from '../images/download_icon.svg'

function NavBar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMenuSidebar, setIsOpenMenuSidebar] = useState(false);
  if (isOpenMenuSidebar === false) {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

  });
  const handdleWithSideMenu = () => {
    if (isOpenMenuSidebar === false) {
      setIsOpenMenuSidebar(true);
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpenMenuSidebar(false);
      document.body.style.height = 'auto';
      document.body.style.overflow = 'visible';
    }
  }
  return (
    <div className={"NavBar-container " + (isScroll ? 'showBackgroundNav' : '')}>
      <Link to='/'>
      <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" className={'discord-logo ' + (isOpenMenuSidebar ? 'discord-logo-disable':'')}/>
      </Link>
        
      <div className='link-container'>
        <Link className='link' to='/download'>Download</Link>
        <Link className='link'>Nitro</Link>
        <Link className='link' to='/servers'>Discover</Link>
        <Link className='link'>Safety</Link>
        <Link className='link'>Careers</Link>
      </div>
      <div className='nav-button-container'>
        <button className='open-button'>
          Open Discord
        </button>
        <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625846fc39fbe53385840143_1%20(3).svg" className='menu-bar' onClick={handdleWithSideMenu}></img>
      </div>
      <div className={'tab-menu-container ' + (isOpenMenuSidebar ? 'tab-menu-container-show':'')}>
        <div className='tab-menu-header'>
          <Link to='/'>
            <Discord_logo className='discord-logo-menubar'/>
          </Link>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594869635af64d3e8a9a63_Frame.svg" loading="lazy" alt="" className="x" onClick={handdleWithSideMenu}/>
        </div>
        <div className='list-menubar-nav'>
        <Link to='/download' className='download'><p >Download</p></Link>
          <p>Nitro</p>
          <div className='safety'>
            <p>Safety</p>
            <Arrow_right className='arrow-right'/>
          </div>
          <p>Support</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className='button-menubar-nav-container'>
          <button className='button-menubar-nav'>
            <Download_icon className='download-icon-nav'/>
            <p>Download</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;