import React from 'react';

import './join.css';
const Join = () =>{
    return (
      <div className='join'>
        <div className='container'>
          <h3 className='join__title'>JOIN SHOPPING COMMUNITY TO&nbsp;GET MONTHLY PROMO</h3>
          <p className='join__text'>Type your email down below and be&nbsp;young wild generation</p>
          <form action='send' className='join__send' method='get'>
            <input type='email' placeholder='Add your email here' required='required' />
            <button className='join__button'>Send</button>
          </form>
        </div>
      </div>
    );
}

export default Join;