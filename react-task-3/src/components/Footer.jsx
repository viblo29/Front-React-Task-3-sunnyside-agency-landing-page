import './Footer.css'
import sunnysideLogo from '../../public/sunnyside-color-green.svg'
import facebookLogo from '../../public/facebook-logo-green.svg'
import instagramLogo from '../../public/instagram-logo-green.svg'
import twitterLogo from '../../public/twitter-logo-green.svg'
import pinterestLogo from '../../public/pinterest-logo-green.svg'

function Footer() {
  return (
    <>
        <div className='footer'>
            <div className="footer-pics"></div>
            <div className="footer-end">
              <div className="footer_site-logo">
                <img src={sunnysideLogo} alt="sunnyside-logo"/>
              </div> 
              <div className="footer-site_menu_navigation">
                <div className="footer-site_menu_navigation_element">About</div>
                <div className="footer-site_menu_navigation_element">Services</div>
                <div className="footer-site_menu_navigation_element">Projects</div>
              </div>
              <div className="footer-social_nav">
                <div className="footer-social_nav_element">
                  <img src={facebookLogo} alt="" />
                </div>
                <div className="footer-social_nav_element">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="footer-social_nav_element">
                  <img src={twitterLogo} alt="" />
                  </div>                          
                <div className="footer-social_nav_element">
                  <img src={pinterestLogo} alt="" />
                  </div>          
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer