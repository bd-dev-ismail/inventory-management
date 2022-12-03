import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png';
const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const handleLogin = (data)=> {
    // console.log(data);
    const user = {
      email: data.email,
      password: data.password
    }
    console.log(user);
    fetch("http://localhost:5000/login", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <h3 className="text-3xl text-center font-bold my-7">Login</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Field Is Required",
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="mt-2 text-error">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password Field Is Required",
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="mt-2 text-error">
                      {errors.password?.message}
                    </p>
                  )}
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control">
                  <Link
                    to="/register"
                    className="label-text capitalized underline"
                  >
                    New In Inventory Management? Register
                  </Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;