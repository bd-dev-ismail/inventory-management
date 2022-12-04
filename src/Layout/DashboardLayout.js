import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
     const {
       data: categories = [],
       isLoading,
       refetch,
     } = useQuery({
       queryKey: ["categories"],
       queryFn: async () => {
         const res = await fetch("https://inventory-management-server-flame.vercel.app/categories");
         const data = await res.json();
         return data;
       },
     });
    const menu = (
      <>
        <li>
          <Link to="/dashboard">Profile</Link>
        </li>

        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-link m-1 font-semibold hover:no-underline text-white no-underline"
          >
            All Products
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content text-white menu p-2 shadow bg-secondary rounded-box w-52"
          >
            {categories.map((category) => (
              <li key={category._id}>
                <Link to={`/dashboard/products/${category._id}`}>
                  {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <li>
          <Link to="/dashboard/add-categories">Add Categories</Link>
        </li>
        <li>
          <Link to="/dashboard/add-proudct">Add Products</Link>
        </li>
      </>
    );
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col">
            {/* <!-- Navbar --> */}
            <div className="bg-secondary text-white ">
              <div className="w-full container mx-auto navbar">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-1 px-2 text-xl font-bold mx-2">
                  <Link to="/dashboard">Inventory Management</Link>
                </div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal text-sm px-5 font-semibold uppercase">
                   {menu}
                  </ul>
                </div>
              </div>
            </div>

            <div className="container mx-auto">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
              {/* Side Bar */}
              {menu}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;