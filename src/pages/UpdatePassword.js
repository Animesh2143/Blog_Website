import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from "../services/operations/authAPI";
import { useLocation, Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Spinner } from '../components/common/Spinner';

export const UpdatePassword = () => {
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { password, confirmPassword } = formData;
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-md p-8 bg-yellow-700 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Update Your Password</h1>
          <p className="text-richblack-300 mb-6">
            Change your password to enhance your account security.
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-6">
            {/* New Password Field */}
            <label className="relative">
              <p className="text-lg font-medium">New Password <sup>*</sup></p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="New Password"
                className="w-full p-3 mt-1 rounded-md bg-pink-700 text-richblack-100 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                required
              />
              <span
                className="absolute right-3 top-10 text-2xl cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </label>

            {/* Confirm Password Field */}
            <label className="relative">
              <p className="text-lg font-medium">Confirm Password <sup>*</sup></p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className="w-full p-3 mt-1 rounded-md bg-pink-700 text-richblack-100 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                required
              />
              <span
                className="absolute right-3 top-10 text-2xl cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg font-bold text-richblack-800 bg-yellow-100 rounded-lg hover:scale-95 transition-all duration-200"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="text-yellow-100 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
