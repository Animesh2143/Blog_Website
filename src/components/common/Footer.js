import React from "react";
import logo from "../../assets/Logo/logo.png";
import { FaGoogle, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = ["Technology", "Lifestyle", "Business", "Health & Wellness", "Personal Growth", "Travel", "Education", "Entertainment"];
const BlogResources = ["Writing Tips", "SEO Guides", "Monetization", "Guest Blogging", "Content Strategy", "Affiliate Marketing", "Newsletter Growth"];
const WritingPlans = ["Free Plan", "Premium Membership", "Team Collaboration"];
const Community = ["Writers' Forum", "Blog Challenges", "Live Webinars"];
const LegalLinks = ["Privacy Policy", "Cookie Policy", "Terms of Service"];


export const Footer = () => {
    return (
      <div className="bg-gradient-to-r from-[#1a1a0d] via-[#333300] to-[#3c3516] mt-10">
        <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
          
          <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
            
            {/* Left Section */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
              
              {/* Blog Brand */}
              <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
                <img src={logo} alt="logo" className="object-contain" />
                <h1 className="text-richblack-50 font-semibold text-[16px]">Blog</h1>
                <div className="flex flex-col gap-2">
                  {["About Us", "Our Writers", "Contact"].map((element, index) => (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      <Link to="#"> {element} </Link>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 text-lg cursor-pointer">
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div>
              </div>
  
              {/* Categories */}
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">Categories</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {Categories.map((element, index) => (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      <Link to="#"> {element} </Link>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Blog Resources */}
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">Blog Resources</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {BlogResources.map((element, index) => (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      <Link to="#"> {element} </Link>
                    </div>
                  ))}
                </div>
              </div>
  
            </div>
  
            {/* Right Section */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
              
              {/* Writing Plans */}
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">Writing Plans</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {WritingPlans.map((element, index) => (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      <Link to="#"> {element} </Link>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Community */}
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">Community</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {Community.map((element, index) => (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      <Link to="#"> {element} </Link>
                    </div>
                  ))}
                </div>
              </div>
            
            </div>
  
          </div>
  
        </div>
  
        {/* Bottom Footer */}
        <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
          <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
            
            {/* Legal Links */}
            <div className="flex flex-row">
              {LegalLinks.map((ele, i) => (
                <div key={i} className={`${LegalLinks.length - 1 === i ? "" : "border-r border-richblack-700"} px-3 cursor-pointer hover:text-richblack-50 transition-all duration-200`}>
                  <Link to="#"> {ele} </Link>
                </div>
              ))}
            </div>
  
            {/* Copyright */}
            <div>© {new Date().getFullYear()} Kalaam Diary || All rights reserved</div>
  
          </div>
        </div>
      </div>
    );
  };
  