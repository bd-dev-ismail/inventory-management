import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../../Components/Shared/Loader';

const AddProduct = () => {
    const {handleSubmit, register, formState: {errors} } = useForm();
    const {data: categories = [], isLoading, refetch} = useQuery({
      queryKey: ['categories'],
      queryFn: async()=> {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        return data
      }
    })
    const handelAddProducts = (data) => {
        console.log(data);
    }
    useEffect(()=> {
      refetch();
    },[refetch])
    return (
      <div className="mt-10 mb-20">
        <div>
          <section className="max-w-4xl p-6 mx-auto bg-secondary rounded-md shadow-md dark:bg-white mt-5">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
              Add Products
            </h1>
            <form onSubmit={handleSubmit(handelAddProducts)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="name"
                  >
                    Product Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.name && (
                    <span className="mt-3 text-white font-bold">
                      name field is required
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="image"
                  >
                    Product Image URL
                  </label>
                  <input
                    {...register("image", { required: true })}
                    id="image"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.image && (
                    <span className="mt-3 text-white font-bold">
                      image field is required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="price"
                  >
                    Product Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    id="price"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.price && (
                    <span className="mt-3 text-white font-bold">
                      price field is required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="ProductCategory"
                  >
                    Product Category
                  </label>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      <select
                        {...register("ProductCategoryId", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        <option>Select</option>
                        {categories?.map((category) => (
                          <option key={category._id} value={category?._id}>
                            {category?.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white dark:text-gray-200" htmlFor="desc">
                  Product Description
                </label>
                <textarea
                  {...register("desc", { required: true })}
                  id="desc"
                  type="textarea"
                  className="block h-36 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <p className="text-center mt-2 text-white font-semibold">
                Note: Make Sure You Fill-Up Every Filed!
              </p>
              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  value="Publish Product"
                  className="btn btn-outline text-white"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
};

export default AddProduct;