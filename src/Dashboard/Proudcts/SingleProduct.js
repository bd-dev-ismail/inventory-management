import React from 'react';

const SingleProduct = ({ product }) => {
  const { name, image, desc } = product;
  console.log(product);
  return (
    <div className="card w-full lg:w-96  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="/" className="h-[320px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-warning">Edit</button>
          <button className="btn btn-sm text-white btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;