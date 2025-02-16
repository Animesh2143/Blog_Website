import React from 'react'
import signupImg from "../assets/Images/signup.jpg";
import Template from "../components/core/Auth/Template";

const Signup = () => {
  return (
    <div>
        <Template
            title="Join the Community of Passionate Bloggers"
            desc1="Share your thoughts, insights, and expertise with the world."
            desc2="Start your blogging journey and build your audience today."
            image={signupImg}
            formtype="signup"
        />
    </div>
  )
}

export default Signup;
