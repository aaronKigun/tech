import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import './footer.css'
const Footer = () => {

  return (
    <footer className='ooter'>
        <div className='container'>
            <div className='c1'>
                <div className='r1'>
                    <h1 className='footer_contact'>Contact Us</h1>
                    <div className='footer-details'>
                        <p className='fd1'><b>Address:</b>Plot 16, Behind Ecwa Seminary Church.</p>
                        <p className='fd1'><b>Phone:</b><a href='tel:+2347041542200'>Call Us +2347041542200</a></p>
                        <p className='fd2'><b>Hours Open:</b>Mon-Sat ( 8am-7pm)</p>
                        <p className='fd1'><b>Follow Us</b></p>
                        <div className='social_icons'>
                            <Link to='https://twitter.com' className='tweet'><BsTwitter/></Link>
                            <Link to='https://facebook.com' className='face'><BsFacebook/></Link>
                            <Link to='https://instagram.com' className='gram'><BsInstagram/></Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className='about'>
                        <h3>About</h3>
                        <ul>
                        <li><Link>About Us</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms & Conditions</Link></li>
                        </ul>
                    </div> 
                    <div className='pages'>
                        <h3>Pages</h3>
                        <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Store</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='installapp'>
                        <h3>Install App</h3>
                        <p>Available on Google Play & App Store</p>
                        <div className='app_icon'>
                        <a href='https://googleplay.com'><img src='./img/gp3.jpeg' alt='' width={135}/></a>
                        <a href='https://appstore.com'><img src='./img/ap.png' alt='' width={200}/></a>
                        </div> 
                    </div>
            </div>
            <hr/>
            <div className='under'>
            <p>&copy; Developed By URRANTECH 2023</p>
            <p className='p1'>Privacy Policy</p>
            <p className='p1'>Terms of Use</p>
            <p>Contact Me</p>
            </div>
    </footer>
  )
}

export default Footer