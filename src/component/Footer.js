import '../App.css'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container-grid'>
        <div className='lang-app-container'>
          <div className='choose-lang-container'>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257bf8b5ba300233705a542_en.png" className="img-flag-en"/>
            <p>English</p>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe10ef3e439bb3365f6a_Arrow.svg"className="arrow-icon"></img>
          </div>
          <div className='app-container'>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg" className="logo logo-x"/>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg" className="logo logo-ig"/>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg" className="logo logo-facebook"/>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg" className="logo logo-youtube"/>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg" className="logo logo-tiktok"/>
          </div>
        </div>

        <ul className='grid1'>
          <li className='title-grid'>Product</li>
          <li>Download</li>
          <li>Nitro</li>
          <li>Status</li>
          <li>App Directory</li>
          <li>New Mobile Experience</li>
        </ul>

        <ul className='grid2'>
          <li className='title-grid'>Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>Brand</li>
          <li>Newsroom</li>
        </ul>

        <ul className='grid3'>
          <li className='title-grid'>Resources</li>
          <li>College</li>
          <li>Support</li>
          <li>Safety</li>
          <li>Blog</li>
          <li>Feedback</li>
          <li>StreamKit</li>
          <li>Creators</li>
          <li>Community</li>
          <li>Developers</li>
          <li>Gaming</li>
          <li>Quests</li>
          <li>Official 3rd Party Merch</li>
        </ul>

        <ul className='grid4'>
          <li className='title-grid'>Policies</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookie Settings</li>
          <li>Guidelines</li>
          <li>Acknowledgements</li>
          <li>Licenses</li>
          <li>Company</li>
          <li>Information</li>
        </ul>

        </div>
        <div className='footerline'>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" className='discord-logo'/>
          <button className='open-discord-button'>
            Open Discord
          </button>
      </div>
    </div>
  );
}

export default Footer;