import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cards from "./Cards";
import { fetchAllBlogs } from "../../services/operations/BlogAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/common/Spinner";

export const Blog = () => {
  const navigate= useNavigate();
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      await dispatch(fetchAllBlogs());; 
    }
    catch (err) {
      console.error("Error fetching blogs:", err);

    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {allBlogs}= useSelector((state)=> state.blog);
  
  useEffect(() => {
    if (allBlogs) {
      localStorage.setItem("allBlogs", JSON.stringify(allBlogs));
    }
  }, [allBlogs]);
  

  return (
    <div className="min-h-[100vh] flex flex-col">
      <div className="bg-bgDark2 py-10">
        <div className="w-11/12 max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Our Blogs
          </h1>
          <button 
          className="absolute top-4 right-5 bg-blue-50 text-black font-bold px-6 py-2 mt-20 mr-5 rounded-full hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          onClick={() => navigate("/createBlog")}>
            Post New Blog
          </button>

          
          {loading ? (
            <p className=" flex justify-center text-white text-center text-4xl">Loading...</p>
          ) : allBlogs ? (
            <Cards blogs={allBlogs} />
          ) : (
            <p className="text-center  text-4xl justify-center text-between text-richblack-400">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
