import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/page.css";
import van1 from "../images/Rectangle-162.png";
import van2 from "../images/Rectangle-163.png";
import van3 from "../images/image-55.png";
import van4 from "../images/image-57.png";
import van5 from "../images/Rectangle-153.png";
import van6 from "../images/Rectangle-156.png";

const vans = [
  { id: 1, type: "Simple", price: 60, img: van1, name: "Modest Explorer" },
  { id: 2, type: "Rugged", price: 80, img: van2, name: "Beach Bum" },
  { id: 3, type: "Luxury", price: 100, img: van3, name: "Reliable Red" },
  { id: 4, type: "Rugged", price: 65, img: van4, name: "Dreamfinder" },
  { id: 5, type: "Luxury", price: 120, img: van5, name: "The Cruiser" },
  { id: 6, type: "Simple", price: 70, img: van6, name: "Green Wonder" },
  { id: 7, type: "Luxury", price: 85, img: van2, name: "Modest Explorer" },
  { id: 8, type: "Simple", price: 50, img: van6, name: "Modest Explorer" },
  { id: 9, type: "Rugged", price: 70, img: van4, name: "Modest Explorer" }
];

export const Vans = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredVans = filter === "All" ? vans : vans.filter(van => van.type === filter);

  const getTabStyle = (tab) => {
    let backgroundColor;
    switch (tab) {
      case "Simple":
        backgroundColor = "#E17654";
        break;
      case "Rugged":
        backgroundColor = "#115E59";
        break;
      case "Luxury":
        backgroundColor = "#252525";
        break;
      default:
        backgroundColor = "#4D4D4D";
        break;
    }
    return {
      backgroundColor: filter === tab ? backgroundColor : "#FFEAD0",
      color: filter === tab ? "#fff" : "#000",
    };
  };

  return (
    <div>
      <div className="overall_container">
        <p className="vans_head">Explore our van options</p>
        
        <div className="tabs">
          {["All", "Simple", "Rugged", "Luxury"].map(tab => (
            <button
              key={tab}
              className={`tab ${filter === tab ? "active" : ""}`}
              onClick={() => handleFilterChange(tab)}
              style={getTabStyle(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="vans_grid_container">
          {filteredVans.map(van => (
            <Link key={van.id} to={`/van/${van.id}`} className="van_container">
              <img className="van_img" src={van.img} alt={van.name} />
              <div className="van_details">
                <p className="van_type">{van.name}</p>
                <p className="van_price">${van.price}</p>
              </div>
              <p className="van_duration">/day</p>
              <p className={`van_type_${van.type.toLowerCase()}`}>{van.type}</p>
            </Link>
          ))}
        </div>
      </div>
      
      <footer>
        &copy;2024 #VANLIFE
      </footer>
    </div>
  );
};
