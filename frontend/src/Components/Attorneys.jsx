import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this line to include Font Awesome CSS

const lawyers = [
  {
    name: 'Mr. Tristan',
    title: 'Hindi',
    img: one,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
  {
    name: 'Mr. Jacob',
    title: 'English',
    img: two,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
  {
    name: 'Ms. Sophia',
    title: 'Maths',
    img: three,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
  {
    name: 'Ms. Sophia',
    title: 'Science',
    img: four,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
  {
    name: 'Ms. Sophia',
    title: 'Physics',
    img: five,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
  {
    name: 'Ms. Sophia',
    title: 'Biology',
    img: six,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      mail: '#',
    },
  },
];

const LawyerProfile = ({ lawyer }) => (
  <div className="bg-white shadow-cyan-500 shadow-xl outline outline-cyan-500 rounded-2xl overflow-hidden">
    <img src={lawyer.img} alt={lawyer.name} className="w-full h-96 object-cover" />
    <div className="p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <a href={lawyer.social.facebook} className="text-blue-600 hover:text-blue-800">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={lawyer.social.instagram} className="text-pink-600 hover:text-pink-800">
          <i className="fab fa-instagram"></i>
        </a>
        <a href={lawyer.social.twitter} className="text-blue-400 hover:text-blue-600">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={`mailto:${lawyer.social.mail}`} className="text-yellow-500 hover:text-yellow-700">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <h2 className="text-center text-black text-xl font-bold">{lawyer.name}</h2>
      <p className="text-center text-black">{lawyer.title}</p>
    </div>
  </div>
);

const Attorneys = () => (
    <>
    <div className="text-center bg-white mx-auto pl-24 pt-8">
            <h1 className='inline-block text-cyan-500 text-3xl md:text-7xl'>Faculty</h1>
        </div>
  <div className="min-h-screen bg-white flex pl-36 flex-col items-center p-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
      {lawyers.map((lawyer, index) => (
        <LawyerProfile key={index} lawyer={lawyer} />
      ))}
    </div>
  </div>
  </>
);

export default Attorneys;
