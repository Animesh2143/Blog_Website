import React, { useEffect, useState } from "react";
import { getBlogDetails } from "../../services/operations/BlogAPI";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import OrganizedTextDisplay from "./blogPage";


const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState(null);
  const location=useLocation();
  const dispatch= useDispatch();
  const blogId = useParams(); 


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await dispatch(getBlogDetails(blogId)); 
        console.log(response);
  
        if (response?.data) {
          setBlogDetails(response?.data);
        } else {
          console.error("Failed to fetch blog details.");
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);  
      }
    };
  
    if (blogId) fetchData();
  }, [blogId]);  
  

  if (loading) {
    return (
      <p className="flex items-center justify-center font-bold text-4xl min-h-screen bg-yellow-700 text-white">
        Loading Blog Details... 
      </p>
    );
  }

  if (!blogDetails) {
    return (
      <p className="flex items-center justify-center font-bold text-4xl min-h-screen bg-richblack-900 text-white">
        No Blog Data Available...
      </p>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-bgDark flex flex-col items-center">
    {/* Blog Title */}
    <h1 className="text-5xl font-extrabold underline text-richblue-25 mb-8 tracking-wide">
      {blogDetails.blogName}
    </h1>

    {/* Blog Thumbnail - Taller Height */}
    <div className="w-full max-w-5xl h-[500px] mb-8 overflow-hidden rounded-lg shadow-lg">
      <img
        src={blogDetails.thumbnail}
        alt="Blog Thumbnail"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Blog Description */}
    <div className="max-w-4xl text-white text-lg leading-relaxed">
      <div><OrganizedTextDisplay text={blogDetails.blogDescription}/></div>
    </div>
  </div>


  );
};

export default BlogDetails;
