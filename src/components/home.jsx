import React from 'react'
import {Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {FiTruck} from 'react-icons/fi'
import {BsCurrencyDollar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BiHeadphone} from 'react-icons/bi'
import {AiOutlineFieldTime} from 'react-icons/ai'
import Homeproduct from './homeproduct'
import './home.css'
const Home = () => {
    React
  return (
    <>
    <div className='top_banner'>
      <div className='container'>
        <div className='detail'>
          <h2>Join Urran Stores today <br></br>and revolutionize your buying <br></br>and selling journey</h2>
            <Link to='/product' className='Link'>SHOP NOW <BsArrowRight/></Link>
        </div>
        <div className='img_box'> 
            <img src='./img/double.png' width={362} className='dp'/>
            <img src='./img/ipisolated.png' width={300}/>
        </div>
      </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
          <img src='./img/pink.jpg' alt='shoes' width={150}></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
          <img src='./img/applewatch.jpg' alt='watch' width={150} ></img>
          </div>
          <div className='detail'>
            <p>27 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
          <img src='./img/iphone2.jpg' alt='phone' width={150} height={220}></img>
          </div>
          <div className='detail'>
            <p>32 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
          <img src='./img/earbud.jpg' alt='buds' width={150} height={220}></img>
          </div>
          <div className='detail'>
            <p>55 products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck/>
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>No WayBill Fee</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
          <BsCurrencyDollar/>
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Guaranty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
          <BiHeadphone/>
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time You Contact Us</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
              <AiOutlineFieldTime/>
          </div>
          <div className='detail'>
            <h3>Short Lenght of Time</h3>
            <p>Get Your Products Within a Day</p>
          </div>
        </div>
      </div>
    </div>
    <div className='banner2'>
      <div className='container'>
        <div className='detail'>
         <h4> Discover unique products from your community and contribute to the growth of local businesses.</h4>
         <Link to='/product' className='Link'>SHOP NOW <BsArrowRight/></Link>
        </div>
        <div className='img_box'>
          <img src='./img/watchpic.jpg' width={500}/>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
            Homeproduct.map((curElm) =>
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src= {curElm.Img} alt={curElm.Title} width={150}></img>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>{curElm.Price}</h4>
                  <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></p>
                </div>
              </div>
              )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>ALL THE PRODUCTS YOU ARE LOOKING FOR</h4>
        <h3>FIND THEM HERE AT URRAN STORES</h3>
        <Link to='/product' className='Link'>SHOP NOW <BsArrowRight/></Link>
        <p></p>
      </div>
      <div className='img_box'>
        <img src='./img/clip.png' width={350}/>
        {/* <img src='./img/vin6.jpg' width={400}/> */}
      </div>
    </div>
  </div>
    </>
  )
}

export default Home