import React from 'react';

import './footer.css';

import facebook from '../../img/socials/fb.svg';
import instagram from '../../img/socials/inst.svg';
import twitter from '../../img/socials/tw.svg';
import linkedin from '../../img/socials/in.svg';

const Footer = () =>{
    return (
      <div className='footer'>
        <div className='container'>
          <ul className='footer__list'>
            <li className='footer__socials'>
              <h2 className='footer__header'>FASHION</h2>
              <p className='item__text'>Complete your style with awesome clothes from&nbsp;us.</p>
              <div className='footer__socItems'>
                <a href='#!'>
                  <img src={facebook} alt='facebook' />
                </a>
                <a href='#!'>
                  <img src={instagram} alt='instagram' />
                </a>
                <a href='#!'>
                  <img src={twitter} alt='twitter' />
                </a>
                <a href='#!'>
                  <img src={linkedin} alt='twitter' />
                </a>
              </div>
            </li>
            <li className='footer__info'>
              <h3 className='info__header'>Company</h3>
              <a href='#!' className='info__about'>
                About
              </a>
              <a href='#!' className='info__contacts'>
                Contact us
              </a>
              <a href='#!' className='info__support'>
                Support
              </a>
              <a href='#!' className='info__careers'>
                Careers
              </a>
            </li>
            <li className='footer__links'>
              <h3 className='links__header'>Quick Link</h3>
              <a href='#!' className='link__location'>
                Share Location
              </a>
              <a href='#!' className='link__orders'>
                Orders Tracking
              </a>
              <a href='#!' className='link__size'>
                Size Guide
              </a>
              <a href='#!' className='link__careers'>
                FAQs
              </a>
            </li>
            <li className='footer__terms'>
              <h3 className='terms__header'>Legal</h3>
              <a href='#!' className='link__location'>
                Terms & conditions
              </a>
              <a href='#!' className='link__orders'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};


export default Footer;