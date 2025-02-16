# Blog_Website

# Blog Website

## Overview
This is a full-featured **blog website** that allows users to **read, write, and manage blogs** on various topics. The platform enables users to create accounts, publish articles, engage with content, and explore diverse categories of blogs.

## Features
- **User Authentication** (Sign up, Login, Logout)
- **Create, Read, Update, Delete (CRUD) Blogs**
- **Rich Text Editor for Blog Writing**
- **Category & Tag-Based Organization**
- **Search and Filter Blogs**
- **Commenting and Like System**
- **User Profile Management**
- **Responsive Design for Mobile & Desktop**
- **SEO Optimization for Better Visibility**

## Tech Stack
### Frontend:
- React.js (with Vite for faster development)
- Tailwind CSS for styling
- Redux for state management
- React Router for navigation

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose ORM
- JSON Web Token (JWT) Authentication
- Multer for file uploads (profile images, blog cover images)

### Additional Tools & Services:
- Axios for API requests
- Cloudinary (or any cloud storage) for image hosting
- Nodemailer for email notifications (optional)

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **MongoDB** (Local or cloud instance)
- **Git** (For version control)

### Steps to Run Locally
#### 1. Clone the repository:
```bash
git clone https://github.com/your-username/blog-website.git
cd blog-website
```

#### 2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
npm install
```

#### 3. Set up environment variables:
Create a `.env` file in the `backend` directory with the following values:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### 4. Start the development servers:
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

#### 5. Open in Browser:
Visit `http://localhost:5173` (or the port specified in Vite) to access the blog website.

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | /api/auth/signup | Register a new user |
| POST   | /api/auth/login | Login user |
| GET    | /api/blogs | Fetch all blogs |
| GET    | /api/blogs/:id | Get a single blog |
| POST   | /api/blogs | Create a new blog (Authenticated) |
| POST   | /api/comments/:blogId | Add a comment to a blog |

## Contribution
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
### Happy Blogging! 🚀


 
