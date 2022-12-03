import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.png';
const Register = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={register} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h3 className="text-3xl text-center font-bold my-7">Register</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    placeholder=""
                    className="input pt-2 input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                 
                </div>
                <div className="form-control">
                  <Link
                    to="/register"
                    className="label-text capitalized underline"
                  >
                    Already Have an account? Login
                  </Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;