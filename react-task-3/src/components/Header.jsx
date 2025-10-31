import './header.css'
import sunnyside_logo from '../../public/sunnyside.svg'

function Header() {
  return (
    <>
        <div className='header'>
          <div><img src={sunnyside_logo} alt="" /></div>
          <div className='header_right'>
            <div>About</div>
            <div>Services</div>
            <div>Projects</div>
            <button className='header_contact'>CONTACT</button>
          </div>
        </div>
    </>
  )
}

export default Header