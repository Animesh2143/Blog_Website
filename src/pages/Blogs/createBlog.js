// import React, { useState } from "react";
// import { createBlog } from "../../services/operations/BlogAPI";
// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CreateBlog = () => {
//   const dispatch= useDispatch();
//   const navigate= useNavigate();
//   const {user}= useSelector((state)=>state.profile);

//   const [blogData, setBlogData] = useState({
//     blogName: "",
//     blogDescription: "",
//     thumbnail: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlogData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleThumbnailChange = (e) => {
//     setBlogData((prevData) => ({
//       ...prevData,
//       thumbnail: e.target.files[0],
//     }));
//   };

//   const countWords = (text) => {
//     return text.trim().split(/\s+/).filter(Boolean).length;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!blogData.blogName || !blogData.blogDescription || !blogData.thumbnail) {
//       toast.error("All fields are required.");
//       return;
//     }
  
//     const wordCount = countWords(blogData.blogDescription);
//     if (wordCount < 500) {
//       toast.error(`Blog description must have at least 500 words. Currently, it has ${wordCount} words.`);
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("userId", user._id);
//     formData.append("blogName", blogData.blogName);
//     formData.append("blogDescription", blogData.blogDescription);
//     formData.append("thumbnail", blogData.thumbnail);
  
//     dispatch(createBlog(formData, navigate))
//     .then(()=>{
//         toast.success("Blog uploaded successfully!");
//         setBlogData({ blogName: "", blogDescription: "", thumbnail: null });
//       })
//       .catch((error)=> {
//         toast.error("Failed to create the blog.");
//         console.error("Error uploading blog:", error);
//       })

//     } 
    

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-xl bg-gray-800 p-10 rounded-lg shadow-lg transform ">
//         <h2 className="text-4xl font-bold text-white text-center mb-8">Create a New Blog</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Blog Name Field */}
//           <div className="mb-6 transition duration-500 hover:scale-105">
//             <label className="block text-lg font-medium text-white mb-2">Blog Name</label>
//             <input
//               type="text"
//               name="blogName"
//               value={blogData.blogName}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-700 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               placeholder="Enter blog name"
//             />
//           </div>

//           {/* Blog Description Field */}
//           <div className="mb-6 transition duration-500 hover:scale-105">
//             <label className="block text-lg font-medium text-white mb-2">Description (Min: 500 words)</label>
//             <textarea
//               name="blogDescription"
//               value={blogData.blogDescription}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-700 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               rows="5"
//               placeholder="Enter blog description"
//             />
//             <p className="text-gray-400 mt-2 text-sm text-white">
//               Word count: {countWords(blogData.blogDescription)} / 500
//             </p>
//           </div>

//           {/* Thumbnail Upload Field */}
//           <div className="mb-6 transition duration-500 hover:scale-105">
//             <label className="block text-lg font-medium text-white mb-2">Blog Thumbnail</label>
//             <input
//               type="file"
//               onChange={handleThumbnailChange}
//               className="w-full text-white p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               accept="image/*"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center transition duration-500 hover:scale-105">
//             <button
//               type="submit"
//               className={`w-full font-bold py-3 rounded-lg transition duration-300 ${
//                 countWords(blogData.blogDescription) < 500 || !blogData.thumbnail
//                   ? "bg-yellow-700 cursor-not-allowed"
//                   : "bg-yellow-300 hover:bg-yellow-100"
//               }`}
//               disabled={countWords(blogData.blogDescription) || !blogData.thumbnail < 500}
//             >
//               Create Blog
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;


// import React, { useState, useRef, useEffect } from "react";
// import { createBlog } from "../../services/operations/BlogAPI";
// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CreateBlog = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.profile);

//   const [blogData, setBlogData] = useState({
//     blogName: "",
//     blogDescription: "",
//     thumbnail: null,
//   });

//   const descriptionRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlogData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     if (name === "blogDescription" && descriptionRef.current) {
//       descriptionRef.current.style.height = "auto"; // Reset height
//       descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Adjust height to content
//     }
//   };

//   const handleBlur = () => {
//     if (descriptionRef.current) {
//       descriptionRef.current.style.height = "5rem"; // Collapse to original size
//     }
//   };

//   const handleThumbnailChange = (e) => {
//     setBlogData((prevData) => ({
//       ...prevData,
//       thumbnail: e.target.files[0],
//     }));
//   };

//   const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!blogData.blogName || !blogData.blogDescription || !blogData.thumbnail) {
//       toast.error("All fields are required.");
//       return;
//     }

//     const wordCount = countWords(blogData.blogDescription);
//     if (wordCount < 500) {
//       toast.error(`Blog description must have at least 500 words. Currently, it has ${wordCount} words.`);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("userId", user._id);
//     formData.append("blogName", blogData.blogName);
//     formData.append("blogDescription", blogData.blogDescription);
//     formData.append("thumbnail", blogData.thumbnail);

//     try {
//       await dispatch(createBlog(formData, navigate));
//       toast.success("Blog uploaded successfully!");
//       setBlogData({ blogName: "", blogDescription: "", thumbnail: null });
//     } catch (error) {
//       toast.error("Failed to create the blog.");
//       console.error("Error uploading blog:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-gray-800 p-10 rounded-lg shadow-lg">
//         <h2 className="text-4xl font-bold text-white text-center mb-8">Create a New Blog</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Blog Name Field */}
//           <div className="mb-6">
//             <label className="block text-lg font-medium text-white mb-2">Blog Name</label>
//             <input
//               type="text"
//               name="blogName"
//               value={blogData.blogName}
//               onChange={handleChange}
//               className="w-full p-4 bg-gray-700 text-richblack-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               placeholder="Enter blog name"
//             />
//           </div>

//           {/* Blog Description Field */}
//           <div className="mb-6">
//             <label className="block text-lg font-medium text-white mb-2">Description (Min: 500 words)</label>
//             <textarea
//               ref={descriptionRef}
//               name="blogDescription"
//               value={blogData.blogDescription}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className="w-full p-4 bg-gray-700 text-richblack-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 resize-none transition-all duration-300"
//               placeholder="Enter blog description"
//               rows={8} 
//             />
//             <p className="text-gray-400 mt-2 text-sm text-white">
//               Word count: {countWords(blogData.blogDescription)} / 500
//             </p>
//           </div>

//           {/* Thumbnail Upload Field */}
//           <div className="mb-6">
//             <label className="block text-lg font-medium text-white mb-2">Blog Thumbnail</label>
//             <input
//               type="file"
//               onChange={handleThumbnailChange}
//               className="w-full text-white p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               accept="image/*"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className={`w-full font-bold py-3 rounded-lg transition duration-300 ${
//                 countWords(blogData.blogDescription) < 500 || !blogData.thumbnail
//                   ? "bg-yellow-700 cursor-not-allowed"
//                   : "bg-yellow-300 hover:bg-yellow-100"
//               }`}
//               disabled={countWords(blogData.blogDescription) < 500 || !blogData.thumbnail}
//             >
//               Create Blog
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;


import React, { useState, useRef } from "react";
import { createBlog } from "../../services/operations/BlogAPI";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const [blogData, setBlogData] = useState({
    blogName: "",
    blogDescription: "",
    thumbnail: null,
  });

  const descriptionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "blogDescription" && descriptionRef.current) {
      descriptionRef.current.style.height = "auto";
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
    }
  };

  const handleThumbnailChange = (e) => {
    setBlogData((prevData) => ({
      ...prevData,
      thumbnail: e.target.files[0],
    }));
  };

  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blogData.blogName || !blogData.blogDescription || !blogData.thumbnail) {
      toast.error("All fields are required.");
      return;
    }

    const wordCount = countWords(blogData.blogDescription);
    if (wordCount < 500) {
      toast.error(`Blog description must have at least 500 words. Currently, it has ${wordCount} words.`);
      return;
    }

    const formData = new FormData();
    formData.append("userId", user._id);
    formData.append("blogName", blogData.blogName);
    formData.append("blogDescription", blogData.blogDescription);
    formData.append("thumbnail", blogData.thumbnail);

    try {
      await dispatch(createBlog(formData, navigate));
      toast.success("Blog uploaded successfully!");
      setBlogData({ blogName: "", blogDescription: ``, thumbnail: null });
    } catch (error) {
      toast.error("Failed to create the blog.");
      console.error("Error uploading blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-gray-800 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Create a New Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* Blog Name Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-white mb-2">Blog Name</label>
            <input
              type="text"
              name="blogName"
              value={blogData.blogName}
              onChange={handleChange}
              className="w-full p-4 bg-gray-700 text-richblack-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Enter blog name"
            />
          </div>

          {/* Blog Description Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-white mb-2">Description (Min: 500 words)</label>
            <textarea
              ref={descriptionRef}
              name="blogDescription"
              value={blogData.blogDescription}
              onChange={handleChange}
              className="w-full p-4 bg-gray-700 text-richblack-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 resize-none transition-all duration-300"
              placeholder="Enter blog description"
              rows={8}
            />
            <p className={`mt-2 text-sm 
              ${countWords(blogData.blogDescription) >= 500 ? "text-yellow-100" : "text-white"}`}
>
              Word count: {countWords(blogData.blogDescription)} / 500
            </p>
          </div>

          {/* Thumbnail Upload Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-white mb-2">Blog Thumbnail</label>
            <input
              type="file"
              onChange={handleThumbnailChange}
              className="w-full text-white p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full font-bold py-3 rounded-lg transition duration-300 ${
                countWords(blogData.blogDescription) < 500 || !blogData.thumbnail
                  ? "bg-blue-500 cursor-not-allowed"
                  : "bg-blue-300 hover:bg-blue-100"
              }`}
              disabled={countWords(blogData.blogDescription) < 500 || !blogData.thumbnail}
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
