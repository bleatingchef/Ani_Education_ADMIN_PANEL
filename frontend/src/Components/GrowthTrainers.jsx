import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const GrowthTrainers = () => {
  const opportunityOutcomeData = {
    labels: ['Real Estate', 'M&A', 'Corporate', 'Employment', 'Environmental', 'Litigation', 'IP'],
    datasets: [
      {
        label: 'Won',
        data: [50, 60, 40, 70, 50, 40, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Lost',
        data: [20, 10, 30, 20, 30, 20, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Declined',
        data: [30, 30, 30, 10, 20, 40, 30],
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const earningThisMonthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Earnings',
        data: [3000, 5000, 4000, 7000, 8000, 6000, 7000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2, // Increase line thickness
        pointRadius: 5, // Increase the size of data points
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Revenue',
        data: [0, 40000, 80000, 60000, 120000, 80000, 100000, 90000, 130000, 110000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const outcomesByOpportunitySourceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Paid',
        data: [7000, 4000, 10000, 8000, 9000, 4000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pending',
        data: [3000, 6000, 2000, 4000, 3000, 6000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    
            
    <div className="pr-5 bg-white pl-60 text-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* <div className="lg:col-span-1 bg-slate-950 shadow shadow-xl shadow-yellow-500  ml-80 max-w-3xl my-10 p-4 rounded-xl">
          <h2 className="text-xl mt-5 font-semibold mb-4">Opportunity Outcome</h2>
          <div>
            <Bar data={opportunityOutcomeData} options={{ plugins: { legend: { position: 'top' } } }} />
          </div>
        </div> */}
        
        <div className=" p-10 mx-16 mt-10 shadow-xl bg-slate-950 shadow-blue-500 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Earnings</h2>
          <div>
            {/* <Line data={earningThisMonthData} options={{ plugins: { legend: { display: false } } }} /> */}
            <Line 
    data={earningThisMonthData} 
    options={{ 
      plugins: { 
        legend: { 
          display: false 
        } 
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12, // Adjust the font size for x-axis labels
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 14, // Adjust the font size for y-axis labels
            },
          },
        },
      },
    }} 
  />
          </div>
        </div>
        <div className="lg:col-span-1 shadow-xl shadow-blue-500 bg-slate-950 pt-20 my-10 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <div>
            <Line data={revenueData} options={{ plugins: { legend: { display: false } } }} />
          </div>
        </div>
        <div className="bg-gray-800 ml-16 shadow-xl shadow-blue-500 bg-slate-950 mr-10 p-4 my-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payments</h2>
          <div>
            <Bar data={outcomesByOpportunitySourceData} options={{ plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>

        <div className='flex flex-col items-center pt-10 space-y-8 bg-slate-950 rounded-lg shadow-xl shadow-blue-500'>
        <div className="bg-purple-600 text-white p-10 rounded-lg text-center w-full md:w-80 shadow-purple-500 shadow-lg">
        <div className="text-2xl font-bold">Total Courses</div>
        <div className="text-3xl font-bold">28</div>
        <div className="flex text-white justify-between mb-2">
                {/* <span>Total Courses</span> */}
                {/* <span>28%</span> */}
              </div>
              <div className="w-full bg-purple-500 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full" style={{ width: '93%' }}></div>
                <div className="text-sm mt-5">Out of 30</div>
              </div>
      </div>

      <div className="bg-orange-600 text-white p-10 rounded-lg text-center w-full md:w-80 shadow-orange-500 shadow-lg">
        <div className="text-2xl font-bold">Fees Collected</div>
        <div className="text-3xl font-bold">$ 21836</div>
        <div className="flex text-white justify-between mb-2">
                {/* <span>Fees Collected</span> */}
                {/* <span>70%</span> */}
              </div>
              <div className="w-full bg-orange-400 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full" style={{ width: '27.295%' }}></div>
                <div className="text-sm mt-5">Out of $80000</div>
              </div>
      </div>
        </div>
        
      
       
      </div>
    </div>
    </>
  );
};

export default GrowthTrainers;
