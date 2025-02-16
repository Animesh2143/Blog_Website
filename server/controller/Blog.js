const Blog = require("../model/Blog"); 
const User = require("../model/User"); 
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

/**
 * Create a new blog
 */
exports.createBlog = async (req, res) => {

    try {
        const { userId , blogName, blogDescription } = req.body;
        const  thumbnail = req?.files?.thumbnail;

        // Check if required fields are provided
        if (!userId || !blogName || !blogDescription || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "All fields are required (blogName, blogDescription, thumbnailImage).",
            });
        }

        // Get user details
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: `User not found.`,
            });
        }

        // Upload thumbnail to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME,1000,1000);

        // Create new blog
        const newBlog = await Blog.create({
            blogName:blogName,
            blogDescription:blogDescription,
            user: userDetails._id,
            thumbnail: thumbnailImage.secure_url,
        });

        // Add the new blog to the user's blogs array
        await User.findByIdAndUpdate(
            userDetails._id,
            {
                $push: { blogs: newBlog._id },
            },
            { new: true }
        );

        return res.status(201).json({
            success: true,
            message: "Blog created successfully.",
            data: newBlog,
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        return res.status(500).json({
            success: false,
            message: `Failed to create blog.`,
        });
    }
};

/**
 * Get all blogs
 */
exports.getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        return res.status(200).json({
            success: true,
            message: "Blogs fetched successfully.",
            data: allBlogs,
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch blogs.",
        });
    }
};

exports.getBlogDetails = async (req, res) => {

    try {
      const blogId = req.query.blogId;

      if (!blogId) {
        return res.status(400).json({
          success: false,
          message: `Blog ID is required. `,
        });
      }
      
      const blogDetails = await Blog.findById(blogId);
      console.log(blogDetails);

      if (!blogDetails) {
        return res.status(404).json({
          success: false,
          message: "Invalid blog ID or blog not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Blog details fetched successfully.",
        data: blogDetails,
      });
    } catch (error) {
      console.error("Error fetching blog details:", error);
      return res.status(500).json({
        success: false,
        message: `Failed to fetch blog details.`,
      });
    }
  };
  