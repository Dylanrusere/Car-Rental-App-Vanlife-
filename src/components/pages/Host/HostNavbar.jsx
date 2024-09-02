import React from 'react'
import { NavLink } from "react-router-dom";
import "./HostDashboard.css"


export const HostNavbar = () => {
  return (
    <div className='host_nav'>
        <li>
            <NavLink to="/hostdashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/hostincome">Income</NavLink>
        </li>
        <li>
            <NavLink to="/hostvans">Vans</NavLink>
        </li>
        <li>
            <NavLink to="/hostreviews">Reviews</NavLink>
        </li>
        
    </div>
  )
}



