/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card mt-5 w-92 shadow-xl hover:shadow-lg hover:scale-105 transition duration-300 dark:bg-gray-800 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary dark:bg-gray-600 dark:text-white">{item.category}</div>
    </h2>
    <p className="dark:text-white">{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline dark:border-gray-600 dark:text-gray-300">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-gray-300 dark:border-gray-700 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
Cards.propTypes = {
    item: PropTypes.any, 
};

export default Cards