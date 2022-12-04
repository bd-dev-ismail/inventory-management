import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20'>
        {products.map((product) => (
          <SingleProduct product={product} key={product?._id}></SingleProduct>
        ))}
      </div>
    );
};

export default Products;