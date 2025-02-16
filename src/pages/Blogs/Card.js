import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogDetails } from "../../services/operations/BlogAPI";
import { useDispatch } from "react-redux";

const Card = ({ blog }) => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();

  const handleClick =() => {
      navigate(`/getBlogDetails/${blog._id}`);
  };

  return (
    <div
      className="w-[300px] bg-bgDark rounded-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={blog.thumbnail || "https://via.placeholder.com/300x200"}
          alt={blog.blogName || "Blog Thumbnail"}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-white font-semibold text-lg">{blog.blogName || "Blog Title"}</h2>
        <p className="text-white mt-2">
          {blog.blogDescription
            ? blog.blogDescription.length > 100
              ? `${blog.blogDescription.substring(0, 100)}...`
              : blog.blogDescription
            : "No description available."}
        </p>
      </div>
    </div>
  );
};

export default Card;
