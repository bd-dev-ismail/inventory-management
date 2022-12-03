import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import registerImg from '../../assets/register.png';
import { useState } from 'react';
import Loader from '../Shared/Loader';
const Register = () => {
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState:{errors}} = useForm();
  const handleRegister = (data)=> {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData=> {
      console.log(imgData.data.display_url);
      const user = {
        name: data.name,
        image: imgData.data.display_url,
        email: data.email,
        password: data.password
      }
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.message){
            toast.error(data.message);
            setLoading(false);
          }
          if (data.acknowledged) {
            toast.success("Registration Successfull!");
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    }).catch(err => {
        toast.error(err.message);
        setLoading(false);
      })
  }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={registerImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <h3 className="text-3xl text-center font-bold my-7">Signup</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "Name Filed Is Required",
                    })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="mt-2 text-error">{errors.name?.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    {...register("image", {
                      required: "Image Field Is Required",
                    })}
                    type="file"
                    placeholder=""
                    className="input pt-2 input-bordered"
                  />
                  {errors.image && (
                    <p className="mt-2 text-error">{errors.image?.message}</p>
                  )}
                </div>
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
                </div>
                <div className="form-control">
                  <Link to="/" className="label-text capitalized underline">
                    Already Have an account? Login
                  </Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">
                    {loading ? <Loader /> : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;