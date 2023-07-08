import React from 'react' ;

import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Banner from './components/banner/banner';
import Favorites from './components/favorites/Favorites';
import Vouchers from './components/vouchers/vouchers';
import Join from './components/Join/join';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className='App'>
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Banner/>
      <Favorites/>
      <Vouchers/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
