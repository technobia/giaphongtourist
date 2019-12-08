import React from 'react';
import HomeShowbiz from '../components/HomeShowbiz';
import HomePromotion from '../components/HomePromotion';
import HomeDestination from '../components/HomeDestination';
import HomeClients from '../components/HomeClients';

const Homepage = () => (
  <>
    <HomeShowbiz />
    <div className='divider'><span /></div>
    <HomePromotion />
    <div className='divider'><span /></div>
    <HomeDestination />
    <div className='divider'><span /></div>
    <HomeClients />
    <div className='divider'><span /></div>
  </>
);

export default Homepage;
