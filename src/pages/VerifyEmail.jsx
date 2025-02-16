import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OTPInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { sendOTP, signup } from '../services/operations/authAPI';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { Spinner } from '../components/common/Spinner';

export const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const signupData = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = signupData.signupData;
    dispatch(signup(firstName, lastName, email, password, confirmPassword, otp, navigate));
  };

  const resendEmail = (e) => {
    e.preventDefault();
    dispatch(sendOTP(signupData.email, navigate));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-600 relative">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="relative flex flex-col gap-6 p-10 rounded-lg w-[500px] shadow-2xl border border-yellow-200 bg-white bg-opacity-20 backdrop-blur-lg text-richblack-5">
          <h1 className="text-4xl font-bold text-center">Verify Email</h1>
          <p className="text-center font-normal text-richblack-700">
            A verification mail has been sent to your registered email.
          </p>
          <form onSubmit={handleOnSubmit} className="w-full text-richblack-5">
            <div className="flex justify-center mb-6 w-full">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="mx-2 text-white">-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{ color: 'white' }}
                    className="p-4 h-18 w-full text-2xl font-bold bg-richblue-400 border border-richblack-900 
                                text-center rounded-xl"
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-bold bg-yellow-100 text-richblack-800 text-lg 
                         hover:scale-95 transition-all duration-200"
            >
              Verify Email
            </button>
          </form>

          <div className="flex justify-between text-md text-richblack-700">
            <div className="flex items-center gap-x-1 hover:text-white">
              <FaLongArrowAltLeft />
              <Link to="/login">
                <p>Back to Login</p>
              </Link>
            </div>
            <div className="flex items-center gap-x-1 hover:text-white">
              <GrPowerReset />
              <button onClick={resendEmail}>Resend Email</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
