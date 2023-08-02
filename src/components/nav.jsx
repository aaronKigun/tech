import React from 'react'
import './nav.css'
import { useAuth0 } from '@auth0/auth0-react'
import {FaFlagUsa} from 'react-icons/fa'
import {AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import {FiLogIn,FiLogOut} from 'react-icons/fi'

const Nav = () => {
  const { loginWithRedirect,logout,user,isAuthenticated} = useAuth0();
    React 
  return (
    <>
    <div className="free">
    <div className='heading'>
      <h1 className='name'>URRAN STORES</h1>
    </div>
    <div className='search_box'>
  <input type='text'value='' placeholder='Search'autoComplete='off' ></input><AiOutlineSearch className='button'/>
  
</div>
          <ul className='navlinks'>
          <li><a href='/'>Home</a></li>
          <li><a href='/store'> Store</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact Us</a></li>
          <li className='icon2'><FaFlagUsa/></li>
          </ul>
          <div className='cilogin'>
            <button onClick={() => loginWithRedirect()} className='login'><FiLogIn/></button>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='logout'><FiLogOut/></button>
          </div>
          <div className='profile'>
            {
                isAuthenticated &&
              (
                <div className='account'>
                  <div className='user_icon'>
                  <AiOutlineUser/>
                  </div>
                  <p>{user.name}</p>
                </div>
              )
            }
          </div>
      </div>
      </>
  )
}

export default Nav