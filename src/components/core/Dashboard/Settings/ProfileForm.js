// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProfile, deleteProfile } from "../../../../services/operations/SettingsAPI";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { logout } from "../../../../services/operations/authAPI";

// export const ProfileForm = () => {
//   const { user } = useSelector((state) => state.profile);
//   const { token } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // Reset form with user data when user changes
//   useEffect(() => {
//     if (user) {
//       reset({
//         firstName: user.firstName || "",
//         lastName: user.lastName || "",
//         email: user.email || "",
//         gender: user?.gender || "",
//         contactNumber: user?.contactNumber || "",
//         dateOfBirth: user?.dateOfBirth || "",
//         about: user?.about || "",
//       });
//     }
//   }, [user, reset]);

//   // Handle profile update
//   const onSubmit = async (data) => {
//     try {
//       const response = await dispatch(updateProfile(data, token));

//       if (response?.success) {
//         toast.success("Profile updated successfully!");
//       } else {
//         toast.error(response?.message || "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   // Handle profile deletion
//   const handleDeleteProfile = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your profile? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       try {
//         await dispatch(deleteProfile(token, navigate));
//         dispatch(logout(navigate));
//         toast.success("Profile deleted successfully.");
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to delete profile.");
//       }
//     } else {
//       toast("Profile deletion canceled.");
//     }
//   };

//   return (
//     <div className="items-center justify-start rounded-md w-[100%] border-[1px] border-richblack-700 bg-yellow-400 p-8 px-12 text-richblack-5">
//       <p className="text-lg font-bold mb-4">Profile Information</p>

//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//         {/* First Name & Last Name */}
//         <div className="flex gap-4">
//           <div className="flex flex-col w-[50%]">
//             <label htmlFor="firstName" className="text-sm text-richblack-400">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               placeholder="Enter First Name"
//               {...register("firstName", { required: "First name is required" })}
//               className="p-2 rounded bg-yellow-400 border border-richblack-700"
//             />
//             {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
//           </div>

//           <div className="flex flex-col w-[50%]">
//             <label htmlFor="lastName" className="text-sm text-richblack-400">Last Name</label>
//             <input
//               id="lastName"
//               type="text"
//               placeholder="Enter Last Name"
//               {...register("lastName", { required: "Last name is required" })}
//               className="p-2 rounded bg-yellow-400 border border-richblack-700"
//             />
//             {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
//           </div>
//         </div>

//         {/* Email */}
//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-sm text-richblack-400">Email</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter Email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
//             })}
//             className="p-2 rounded bg-yellow-400 border border-richblack-700"
//             disabled
//           />
//           {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//         </div>

//         {/* Gender & Contact Number */}
//         <div className="flex gap-4">
//           <div className="flex flex-col w-[50%]">
//             <label htmlFor="gender" className="text-sm text-richblack-400">Gender</label>
//             <select
//               id="gender"
//               {...register("gender", { required: "Please select your gender" })}
//               className="p-2 rounded bg-yellow-400 border border-richblack-700"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
//           </div>

//           <div className="flex flex-col w-[50%]">
//             <label htmlFor="contactNumber" className="text-sm text-richblack-400">Contact Number</label>
//             <input
//               id="contactNumber"
//               type="tel"
//               placeholder="Enter Contact Number"
//               {...register("contactNumber", {
//                 required: "Contact number is required",
//                 pattern: { value: /^[0-9]{10}$/, message: "Invalid contact number" },
//               })}
//               className="p-2 rounded bg-yellow-400 border border-richblack-700"
//             />
//             {errors.contactNumber && <span className="text-red-500 text-sm">{errors.contactNumber.message}</span>}
//           </div>
//         </div>

//         {/* Date of Birth */}
//         <div className="flex flex-col">
//           <label htmlFor="dateOfBirth" className="text-sm text-richblack-400">Date of Birth</label>
//           <input
//             id="dateOfBirth"
//             type="date"
//             {...register("dateOfBirth", { required: "Date of birth is required" })}
//             className="p-2 rounded bg-yellow-400 border border-richblack-700"
//           />
//           {errors.dateOfBirth && <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>}
//         </div>

//         {/* About */}
//         <div className="flex flex-col">
//           <label htmlFor="about" className="text-sm text-richblack-400">About</label>
//           <textarea
//             id="about"
//             placeholder="Write something about yourself"
//             {...register("about")}
//             className="p-2 rounded bg-yellow-400 border border-richblack-700"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex gap-4 justify-between">
//           <button
//             type="submit"
//             className="bg-yellow-200 py-2 px-4 rounded text-richblack-900 font-semibold mt-4"
//           >
//             Save Changes
//           </button>

//           <button
//             type="button"
//             onClick={handleDeleteProfile}
//             className="bg-red-600 py-2 px-4 rounded text-white font-semibold mt-4"
//           >
//             Delete Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, deleteProfile } from "../../../../services/operations/SettingsAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logout } from "../../../../services/operations/authAPI";

export const ProfileForm = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    contactNumber: "",
    dateOfBirth: "",
    about: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        gender: user.gender || "",
        contactNumber: user.contactNumber || "",
        dateOfBirth: user.dateOfBirth || "",
        about: user.about || "",
      });
    }
  }, [user]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("gender", formData.gender);
      data.append("contactNumber", formData.contactNumber);
      data.append("dateOfBirth", formData.dateOfBirth);
      data.append("about", formData.about);
      const response = await dispatch(updateProfile(data, token));

      if (response?.success) {
        toast.success("Profile updated successfully!");
      } else {
        toast.error(response?.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong. Please try again.");
    }
    // window.location.reload(); 
  };

  // Handle profile deletion
  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile? This action cannot be undone."
    );
    if (confirmDelete) {
      try {
        await dispatch(deleteProfile(token, navigate));
        dispatch(logout(navigate));
        toast.success("Profile deleted successfully.");
      }
      catch (error) {
        console.error("Error deleting profile:", error);
        toast.error("Failed to delete profile.");
      }
    }
    else {
      toast("Profile deletion cancelled.");
    }
  };

  return (
    <div className="items-center justify-start rounded-md w-[100%] border-[1px] border-richblack-700 bg-gradient-to-r from-pink-400 to-pink-200 p-8 px-12 text-richblack-5">
      <p className="text-lg font-bold mb-4">Profile Information</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* First Name & Last Name */}
        <div className="flex gap-4">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="firstName" className="text-sm text-blue-100">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="p-2 rounded bg-yellow-400 border border-richblack-700"
              required
            />
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="lastName" className="text-sm text-blue-100">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="p-2 rounded bg-yellow-400 border border-richblack-700"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-blue-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="p-2 rounded bg-yellow-400 border border-richblack-700"
            disabled
          />
        </div>

        {/* Gender & Contact Number */}
        <div className="flex gap-4">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="gender" className="text-sm text-blue-100">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 rounded bg-yellow-400 border border-richblack-700"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="contactNumber" className="text-sm text-blue-100">
              Contact Number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              className="p-2 rounded bg-yellow-400 border border-richblack-700"
              required
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="text-sm text-blue-100">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="p-2 rounded bg-yellow-400 border border-richblack-700"
            required
          />
        </div>

        {/* About */}
        <div className="flex flex-col">
          <label htmlFor="about" className="text-sm text-blue-100">
            About
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Write something about yourself"
            className="p-2 rounded bg-yellow-400 border border-richblack-700"
          />
        </div>

        {/* Submit and Delete Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            type="submit"
            className="bg-yellow-200 py-2 px-4 rounded text-richblack-900 font-semibold mt-4"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleDeleteProfile}
            className="bg-red-600 py-2 px-4 bg-caribbeangreen-800 rounded text-white font-semibold mt-4"
          >
            Delete Profile
          </button>
        </div>
      </form>
    </div>
  );
};
