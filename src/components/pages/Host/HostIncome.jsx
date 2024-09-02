import React from 'react';
import './HostDashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HostNavbar } from './HostNavbar';


const data = [
  { name: 'Ju', income: 2000 },
  { name: 'Au', income: 1000 },
  { name: 'Se', income: 3000 },
  { name: 'Oc', income: 2500 },
  { name: 'No', income: 1600 },
  { name: 'De', income: 900 },
];

export const HostIncome = () => {
  return (
    <div>
      <HostNavbar />
      <div className="income">
      
      <h2>Income</h2>
      <p>Last 30 days</p>
      <h1>$2,260</h1>

      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#FFA500" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="transactions">
        <h3>Your transactions (3)</h3>
        <p>Last 30 days</p>
        <div className="transaction-item">
          <span>$720</span> <span>1/12/22</span>
        </div>
        <div className="transaction-item">
          <span>$560</span> <span>10/11/22</span>
        </div>
        <div className="transaction-item">
          <span>$980</span> <span>23/11/22</span>
        </div>
      </div>
    </div>
    </div>
  );
};