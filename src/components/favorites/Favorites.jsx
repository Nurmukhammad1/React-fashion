import React from 'react';

import Card from '../card/Card';
import './favorites.css';

import cat01Img from '../../img/images/promo-01.jpg';
import cat02Img from '../../img/images/promo-02.jpg';



const Favorites = ()=>{
  
    return(
        <section className='favorites'>
            <div className='container'>
                <div className='favorites__header'>
                    <h2 className='title-2'>Young’s Favourite</h2>
                </div>
                <div className='favorites__cards'>
                    <Card title='Trending on instagram' img={cat01Img}/>
                    <Card title='All Under $40' img={cat02Img}/>
                </div>
            </div>
        </section>
    );

};


export default Favorites;