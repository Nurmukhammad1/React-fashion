import React from 'react';

import appStore from '../../img/apps/app-store.svg';
import googlePlay from '../../img/apps/google-play.svg';
import mobileApp from '../../img/apps/vouchers-img.png';
import './vouchers.css';

const Vouchers = () =>{
    return(
        <div className='vouchers'>
            <div className='vouchers__text'>
                <div className='vouchers__title'>DOWNLOAD APP &amp; GET THE VOUCHER!</div>
                <p className='vouchers__descr'>Get&nbsp;30% off for first transaction using Rondovision mobile app for now.</p>
                <div className='vouchers__apps'>
                    <a href="!#"><img className='btn' src={appStore} alt="app" /></a>
                    <a href="!#"><img src={googlePlay} alt="google play"/></a>
                </div>
            </div>
            <div className='mobileApp'><img src={mobileApp} alt="mobile" /></div>
        </div>
    )
};


export default Vouchers;