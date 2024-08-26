import React from 'react';
import "./HostDashboard.css"
import { Link } from 'react-router-dom';
import img1 from './images/Rectangle-162.png'

export const HostVansList = () => {
  
  
  const vans = [
    { id: 1, name: 'Modest Explorer', price: 60, image: img1 },
    { id: 2, name: 'Beach Bum', price: 80, image: img1 },
    { id: 3, name: 'Green Wonder', price: 70, image: img1 },
  ];

  return (
    <div className="host-vans">
      <div className="vans_container">
        <h1>Your listed vans</h1>
        <div className="vans-list">
          {vans.map(van => (
            <Link to={`/hostvans/${van.id}`} key={van.id} className="van-item">
              <img src={van.image} alt={van.name} />
              <div>
                <h2>{van.name}</h2>
                <p>${van.price}/day</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className='host_footer'>© 2022 #VANLIFE</footer>
    </div>
  );
};