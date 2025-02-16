import { useParams } from "react-router-dom";
import { setAllBlogs, setBlogDetails } from "../../slices/blogSlice";
import { apiConnector } from "../apiConnector";
import { blogEndpoints } from "../apis";
import { toast } from "react-hot-toast";

const {
  GET_ALL_BLOGS_API,
  CREATE_BLOG_API,
  GET_BLOG_DETAILS_API,
} = blogEndpoints;

// Fetch all blogs
export const fetchAllBlogs = () => async (dispatch) => {
  try {
    const response = await apiConnector("GET", GET_ALL_BLOGS_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);

    dispatch(setAllBlogs(response.data.data)); 

    return response.data.data;
  }
  catch (error) {
    console.error("Error fetching all blogs:", error);
    
    return [];
  }
};

// Create a new blog
export const createBlog = (formData, navigate) => async (dispatch) => {
  const toastId = toast.loading("Uploading New Blog...");
  try {
    const response = await apiConnector("POST", CREATE_BLOG_API, formData, {
      "Content-Type": "multipart/form-data",
    });

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    toast.dismiss(toastId);
    await dispatch(fetchAllBlogs());  // Fetch the updated list of blogs
    navigate("/blog");
    window.location.reload();

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating blog:", error);
    toast.dismiss(toastId);
    return {
      success: false,
      message: error.message,
    };
  }
};
export const getBlogDetails = (blogId) => async (dispatch) => {
  try {
    const response = await apiConnector("GET", `${GET_BLOG_DETAILS_API}`, null, null, blogId);
    console.log("API Response:", response.data.data);
    if (!response) {
      throw new Error("Failed to fetch blog details.");
    }
    return {
      success: true,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);

    return {
      success: false,
      message: error.message,
    };
  }
};

