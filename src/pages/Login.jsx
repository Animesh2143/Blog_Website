import React from 'react'
import loginImg from "../assets/Images/login.jpg";
import Template from "../components/core/Auth/Template";

const Login = () => {
  return (
    <div>
        <Template
            title="Welcome Back to Your Blogging Hub"
            desc1="Share your thoughts, insights, and stories with the world."
            desc2="Connect, engage, and grow your audience effortlessly."
            image={loginImg}
            formtype="login"
        />
    </div>
  )
}

export default Login;
