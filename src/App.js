import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Navbar } from './components/common/Navbar';
import { ForgotPassword } from './pages/ForgotPassword';
import { UpdatePassword } from './pages/UpdatePassword';
import { VerifyEmail } from './pages/VerifyEmail';
import { Spinner } from './components/common/Spinner';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { About } from './pages/About';
import {Blog } from './pages/Blogs/blog';
import { Error } from './pages/Error';
import { Contact } from './pages/Contact';
import MyProfile from './components/core/Dashboard/MyProfile';
import { PrivateRoute } from './components/core/Auth/PrivateRoute';
import { OpenRoute } from './components/common/OpenRoute';
import { Dashboard } from './pages/Dashboard';
import {Settings} from './components/core/Dashboard/Settings/index';
import { createBlog } from './services/operations/BlogAPI';
import CreateBlog from './pages/Blogs/createBlog';
import BlogDetails from './pages/Blogs/blogDetails';


function App() {
	const loading = useSelector((state) => state.auth);
  
	return (
	  <div className="min-h-screen w-screen h-fit flex flex-col font-inter bg-gradient-to-r from-black to-[#c89116] text-richblue-900">
		<Navbar />
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/verify-email" element={<VerifyEmail />} />
		  <Route path="/about" element={<About />} />
		  <Route path="/contact" element={<Contact />} />
		  <Route path="/forgot-password" element={<ForgotPassword />} />
		  <Route path="/update-password/:id" element={<UpdatePassword />} />
		  <Route path="*" element={<Error />} />
  
		  {/* Public Routes */}
		  <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
		  <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
  
		  {/* Private Routes */}
		  <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
		  <Route path="/createBlog" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
		  <Route path="/getBlogDetails/:blogId" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
  
		  {/* Dashboard Nested Routes */}
		  <Route element={<PrivateRoute><Dashboard /></PrivateRoute>}>
			<Route path="/dashboard/my-profile" element={<MyProfile />} />
			<Route path="/dashboard/settings" element={<Settings />} />
		  </Route>
		</Routes>
	  </div>
	);
  }
  
export default App;  