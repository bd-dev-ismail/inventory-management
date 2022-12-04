import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddCategories = () => {
    const {register, handleSubmit} = useForm();
    const handelAddcategoris = (data) => {
        console.log(data);
        fetch("http://localhost:5000/categories", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success("Category Added Successfuly!")
            }
        })
    }
    return (
      <div className="mt-10 mb-20">
        <div>
          <section className="max-w-4xl p-6 mx-auto bg-secondary rounded-md shadow-md dark:bg-white mt-5">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
              Add Products
            </h1>
            <form onSubmit={handleSubmit(handelAddcategoris)}>
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="name">
                  Category Name
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
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

export default AddCategories;