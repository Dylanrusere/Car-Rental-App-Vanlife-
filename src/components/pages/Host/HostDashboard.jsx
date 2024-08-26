import React from 'react';
import { Link } from "react-router-dom";
import './HostDashboard.css';
import { HostNavbar } from './HostNavbar';
import { HostVans } from './HostVans';

export const HostDashboard = () => {
  return (
    <div>
      <HostNavbar />
      <div className='container'>
            <h2>Welcome!</h2>
            <div className='card'>
                <p className='pars'>Income last last 30 days<Link to="/hostincome">Details</Link></p>
                <h1>$2,260</h1>
            </div>
            <div className='card'>
                <p className='pars'>Review score ⭐ 5.0/5<Link to="/hostreviews">Details</Link></p>
            </div>
        </div>
        <HostVans />
    </div>
  );
};


