import React from 'react';
import "../pages/page.css"
import { useParams, Link } from 'react-router-dom';
import van1 from "../images/Rectangle-162.png";
import van2 from "../images/Rectangle-163.png";
import van3 from "../images/image-55.png";
import van4 from "../images/image-57.png";
import van5 from "../images/Rectangle-153.png";
import van6 from "../images/Rectangle-156.png";

const vans = [
  { id: 1, type: "Simple", price: 60, img: van1, name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!" },
  { id: 2, type: "Rugged", price: 80, img: van2, name: "Beach Bum", description: "The Beach Bum is perfect for those who love the ocean. Equipped with surfboard racks, this van will take you to the best surf spots along the coast." },
  { id: 3, type: "Luxury", price: 100, img: van3, name: "Reliable Red", description: "Reliable Red is all about comfort and style. With a plush interior and top-of-the-line amenities, this van ensures you travel in luxury." },
  { id: 4, type: "Rugged", price: 65, img: van4, name: "Dreamfinder", description: "Dreamfinder is rugged and ready for adventure. It's built to handle the roughest terrains and get you to the most remote locations." },
  { id: 5, type: "Luxury", price: 120, img: van5, name: "The Cruiser", description: "The Cruiser offers the ultimate luxury travel experience. Its state-of-the-art features and elegant design make it the perfect choice for those who want to travel in style." },
  { id: 6, type: "Simple", price: 70, img: van6, name: "Green Wonder", description: "Green Wonder is eco-friendly and efficient. This van is equipped with green technology to minimize your carbon footprint while you explore the great outdoors." },
  { id: 7, type: "Luxury", price: 85, img: van2, name: "Modest Explorer", description: "Another luxurious take on the Modest Explorer, equipped with additional amenities to make your journey even more comfortable." },
  { id: 8, type: "Simple", price: 50, img: van6, name: "Modest Explorer", description: "A simpler version of the Modest Explorer, offering all the basic necessities for a great adventure." },
  { id: 9, type: "Rugged", price: 70, img: van4, name: "Modest Explorer", description: "Rugged and durable, this version of the Modest Explorer is perfect for off-road adventures." }
];

const VanDetails = () => {
  const { id } = useParams();
  const van = vans.find(v => v.id === parseInt(id));

  if (!van) {
    return <div>Van not found</div>;
  }

  return (
    <div className="van-details-container">
      <Link to="/vans" className="back-link">← Back to all vans</Link>
      <img src={van.img} alt={van.name} className="van-details-image" />
      <div className="van-details-content">
        <p className={`van-details-type van-details-type_${van.type.toLowerCase()}`}>{van.type}</p>
        <h1 className="van-details-name">{van.name}</h1>
        <p className="van-details-price">${van.price}<span className="van-details-duration">/day</span></p>
        <p className="van-details-description">{van.description}</p>
        <button className="van-details-rent-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetails;
