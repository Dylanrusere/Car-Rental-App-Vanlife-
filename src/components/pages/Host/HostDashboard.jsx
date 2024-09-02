import React from 'react';
import { Link } from "react-router-dom";
import './HostDashboard.css';
import { HostNavbar } from './HostNavbar';
import img1 from './images/Rectangle-162.png'

export const HostDashboard = () => {

  const vans = [
    { id: 1, name: 'Modest Explorer', price: 60, image: img1 },
    { id: 2, name: 'Beach Bum', price: 80, image: img1 },
    { id: 3, name: 'Green Wonder', price: 70, image: img1 },
  ];

  return (
    <div>
      <HostNavbar />
      <div className='container'>
            <h2>Welcome!</h2>
            <div className='card'>
                <p className='pars'>Income last last 30 days<Link to="/hostvans">Details</Link></p>
                <h1>$2,260</h1>
            </div>
            <div className='card'>
                <p className='pars'>Review score ⭐ 5.0/5<Link to="/hostreviews">Details</Link></p>
            </div>
        </div>
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
    </div>
  );
};


