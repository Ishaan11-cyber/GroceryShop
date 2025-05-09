import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories';
import BestSeller from '../components/BestSeller';
import BootampBanner from '../components/BottomBanner';
import NewsLetter from '../components/NewsLetter';
const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Categories />
        <BestSeller /> 
        <BootampBanner />
        <NewsLetter />
    </div>
  )
}

export default Home;