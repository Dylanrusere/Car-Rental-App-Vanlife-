import React from 'react';
import "./HostDashboard.css"
import { Link } from 'react-router-dom';
import { HostNavbar } from './HostNavbar';
import img1 from './images/Rectangle-162.png'

export const HostVans = () => {
  
  
  const vans = [
    { id: 1, name: 'Modest Explorer', price: 60, image: img1 },
    { id: 2, name: 'Beach Bum', price: 80, image: img1 },
    { id: 3, name: 'Green Wonder', price: 70, image: img1 },
  ];

  return (
    <div className="host-vans">
      <HostNavbar />
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

// import React from 'react';
// import './HostDashboard.css';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Ju', income: 2000 },
//   { name: 'Au', income: 1000 },
//   { name: 'Se', income: 3000 },
//   { name: 'Oc', income: 2500 },
//   { name: 'No', income: 1600 },
//   { name: 'De', income: 900 },
// ];

// export const HostVans = () => {
//   return (
//     <div className="big_container">
//       <div className="income">
//         <h2>Income</h2>
//         <p>Last 30 days</p>
//         <h1>$2,260</h1>
//         <div className="chart">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="income" fill="#FFA500" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="transactions">
//           <h3>Your transactions (3)</h3>
//           <p>Last 30 days</p>
//           <div className="transaction-item">
//             <span>$720</span> <span>1/12/22</span>
//           </div>
//           <div className="transaction-item">
//             <span>$560</span> <span>10/11/22</span>
//           </div>
//           <div className="transaction-item">
//             <span>$980</span> <span>23/11/22</span>
//           </div>
//         </div>
//       </div>
//       <footer className='host_footer'>© 2022 #VANLIFE</footer>
//     </div>
//   );
// };