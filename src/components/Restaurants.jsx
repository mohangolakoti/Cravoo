import React, { useEffect, useState } from 'react';
import { API } from '../constants/api';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'South-Indian', 'North-Indian', 'Chineese', 'Bakery'];

  const popularRestaurants = async () => {
    try {
      const response = await fetch(`${API}/vendor/all-vendors`);
      const newData = await response.json();
      setPopular(newData.vendors);
      setLoading(false);
      console.log("This is Api data", newData.vendors);
    } catch (error) {
      console.log(error);
      /* alert("Failed to fetch data") */
    }
  };

  useEffect(() => {
    popularRestaurants();
  }, []);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredVendors = selectedRegion === 'All' 
    ? popular 
    : popular.filter(vendor => 
        vendor.firm.some(item => 
          item.region.map(r => r.toLowerCase()).includes(selectedRegion.toLowerCase())
        )
      );

  return (
    <div className='md:mx-14 mx-8 my-20 font-OpenSans'>
      <h2 className='text-2xl font-Montserrat font-bold'>Restaurants</h2>
      <div className='flex min-[920px]::gap-14 gap-6 my-8 text-lg font-medium flex-wrap '>
        {regions.map(region => (
          <p 
            key={region} 
            onClick={() => handleRegionChange(region)}
            className={`border border-gray-300 px-5 py-1 rounded-3xl cursor-pointer ${selectedRegion === region ? 'bg-gray-300' : ''}`}>
            {region}
          </p>
        ))}
      </div>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 gap-6 my-5'>
        {filteredVendors && filteredVendors.map((vendor) => (
          <div key={vendor._id}>
            {vendor.firm.map((item) => (
              <Link key={item._id} to={`/product/${item.firmName}/${item._id}`}>
                <div className='hover:scale-95'>
                  <img src={`${API}/uploads/${item.image}`} alt="" className='rounded-3xl shadow-xl cursor-pointer' />
                  <p className='mt-[-43px] text-xl rounded-3xl font-extrabold text-white px-4 py-2 relative w-full bg-gradient-to-b from-transparent to-black'>{item.offer}</p>
                  <div className='px-3 text-lg font-medium text-gray-500'>
                    <p className='text-xl mt-2 font-bold text-black'>{item.firmName}</p>
                    <p>{item.category}</p>
                    <p className='overflow-hidden whitespace-nowrap max-w-[250px] overflow-ellipsis'>{item.region.join(', ')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
