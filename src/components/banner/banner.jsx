import React from 'react';

import './banner.css';
import bannerImg from '../../img/images/payday-img.jpg' ;

const Banner = () =>{
    return (
      <section className='banner'>
        <div className='container'>
          <div className='banner__content'>
            <div className='banner__img'>
              <img src={bannerImg} alt='Banner' />
            </div>
            <div className='banner__text'>
              <div className='banner__title'>
                <span className='highlight'>
                  <span>PAYDAY</span>
                </span>
                <span>
                  <span>SALE NOW</span>
                </span>
              </div>
              <div className='banner__desc'>
                Spend minimal $100 get&nbsp;30% off voucher code for your next purchase
              </div>
              <div className='banner__data'>1 June - 10 June 2021</div>
              <div className='banner__terms'>*Terms & Conditions apply</div>
              <div className='banner__btn-wrapper'>
                <a href='#!' className='banner__btn'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner;

