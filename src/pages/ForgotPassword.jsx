import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResetPasswordToken } from '../services/operations/authAPI';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Spinner } from '../components/common/Spinner';

export const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(getResetPasswordToken(email, setEmailSent));
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-richblack-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-lg p-10 bg-yellow-700 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            {emailSent ? "Check Your Email" : "Reset Your Password"}
          </h1>
          <p className="text-sm text-richblack-300 mb-6">
            {emailSent
              ? "An email has been sent to your registered email address. Please check your inbox to reset your password."
              : "Enter your registered email address, and we will send you instructions to reset your password."}
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            {!emailSent && (
              <div>
                <label className="block text-lg font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full p-3 rounded-md bg-pink-700 text-richblack-100 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg font-bold text-richblack-800 bg-yellow-100 rounded-lg hover:scale-95 transition-all duration-200"
            >
              {emailSent ? "Resend Email" : "Reset Password"}
            </button>
          </form>
          <div className="flex justify-end items-center mt-6 gap-1 text-md text-richblack-300 hover:text-white">
            <FaLongArrowAltLeft />
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};
