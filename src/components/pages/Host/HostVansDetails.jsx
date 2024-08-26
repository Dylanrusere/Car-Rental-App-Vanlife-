import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HostNavbar } from './HostNavbar';

const vanDetails = {
  1: {
    name: 'Modest Explorer',
    category: 'Simple',
    description: 'The Modest Explorer is a van designed to get you out of the house and into nature...',
    price: 60,
    image: '/images/modest-explorer.jpg',
    visibility: 'Public'
  },
  2: {
    name: 'Beach Bum',
    category: 'Luxury',
    description: 'The Beach Bum van is perfect for your seaside adventures...',
    price: 80,
    image: '/images/beach-bum.jpg',
    visibility: 'Public'
  },
  3: {
    name: 'Green Wonder',
    category: 'Eco',
    description: 'The Green Wonder is an eco-friendly van equipped with solar panels...',
    price: 70,
    image: '/images/green-wonder.jpg',
    visibility: 'Public'
  }
};

export const HostVansDetails = () => {
  const { id } = useParams();
  const van = vanDetails[id];

  return (
    <div className="van-details">
      < HostNavbar/>
      <Link to="/host/vans" className="back-link">← Back to all vans</Link>
      <div className="van-detail-content">
        <img src={van.image} alt={van.name} />
        <div className="van-info">
          <h2>{van.name}</h2>
          <p>Category: {van.category}</p>
          <p>Description: {van.description}</p>
          <p>Visibility: {van.visibility}</p>
        </div>
      </div>
      <footer>© 2022 #VANLIFE</footer>
    </div>
  );
};
