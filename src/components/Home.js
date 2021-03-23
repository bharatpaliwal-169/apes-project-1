import React from 'react';
import bg from './images/banner.jpg';
import Info from './Elements/Info';
import Poster from './Elements/Poster';
const Home = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
          <img src={bg} alt='banner' className='img-fluid img-responsive' />
      </div>
      <Info />
      <Poster />
    </div>
  )
}

export default Home;