import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

const monthlyData = [
  { day: 'SUN', income: 400, expense: 240 },
  { day: 'MON', income: 300, expense: 139 },
  { day: 'TUE', income: 200, expense: 980 },
  { day: 'WED', income: 278, expense: 390 },
  { day: 'THU', income: 189, expense: 480 },
  { day: 'FRI', income: 239, expense: 380 },
  { day: 'SAT', income: 349, expense: 430 },
];

const weeklyData = [
  { day: 'SUN', income: 150, expense: 100 },
  { day: 'MON', income: 200, expense: 140 },
  { day: 'TUE', income: 180, expense: 130 },
  { day: 'WED', income: 250, expense: 160 },
  { day: 'THU', income: 220, expense: 150 },
  { day: 'FRI', income: 270, expense: 180 },
  { day: 'SAT', income: 300, expense: 210 },
];

const pieData = [
  { name: 'Pink', value: 400 },
  { name: 'Yellow', value: 300 },
  { name: 'Blue', value: 300 },
];

const barData = [
  { day: 'SUN', balance: 20 },
  { day: 'MON', balance: 50 },
  { day: 'TUE', balance: 30 },
  { day: 'WED', balance: 70 },
  { day: 'THU', balance: 60 },
  { day: 'FRI', balance: 90 },
  { day: 'SAT', balance: 40 },
];

const Dashboard = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const COLORS = ['#FF0080', '#FFCD00', '#00BFFF'];

  return (
    <div className="p-8 pl-96 text-white bg-gradient-to-r from-purple-800 to-blue-800 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-purple-900 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Pie Chart</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-4">
            <span className="text-pink-500">Pink</span>
            <span className="text-yellow-500">Yellow</span>
            <span className="text-blue-500">Blue</span>
          </div>
        </div>
        
        <div className="bg-purple-900 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Your Balance</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="balance" fill="#FFB800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-purple-900 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Admission Summary</h3>
          <div className="text-2xl font-bold">$4,563</div>
          <div className="text-green-400 text-sm">+1.6% than last week</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#00BFFF" />
              <Bar dataKey="expense" fill="#FF0080" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-purple-900 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Balance Summary</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-4 py-2 rounded-lg ${isMonthly ? 'bg-blue-600' : 'bg-transparent border border-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-4 py-2 rounded-lg ${!isMonthly ? 'bg-blue-600' : 'bg-transparent border border-white'}`}
            >
              Weekly
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="text-center">
            <p className="text-sm">Income</p>
            <p className="text-2xl font-bold">$459,234.08</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Expense</p>
            <p className="text-2xl font-bold">$23,456</p>
          </div>
        </div>
        <div className="mt-8">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={isMonthly ? monthlyData : weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#8884d8" />
              <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-900 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold">$19,522</h3>
          <p className="text-sm">Expense</p>
          <p className="text-xs">+0.5% than last month</p>
        </div>
        <div className="bg-purple-900 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold">$45,234</h3>
          <p className="text-sm">Income</p>
          <p className="text-xs">-2% than last month</p>
        </div>
        <div className="bg-purple-900 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold">$984</h3>
          <p className="text-sm">Transactions</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-purple-900 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Earning Categories</h3>
          <div className="flex justify-between mb-2">
            <span>#investment</span>
            <span>$89.24</span>
          </div>
          <div className="w-full bg-purple-700 h-2 rounded-full mb-4">
            <div className="bg-pink-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <div className="flex justify-between mb-2">
            <span>#transfer</span>
            <span>$441.45</span>
          </div>
          <div className="w-full bg-purple-700 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
        
        {/* <div className="bg-purple-900 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Others tag</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-700 px-3 py-1 rounded-full">#teamwork</span>
            <span className="bg-purple-700 px-3 py-1 rounded-full">#design</span>
            <span className="bg-purple-700 px-3 py-1 rounded-full">#projectmanagement</span>
            <span className="bg-purple-700 px-3 py-1 rounded-full">16+</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
