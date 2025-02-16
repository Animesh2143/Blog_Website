import { settingsEndpoints } from "../apis";
import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/profileSlice";

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;

/**
 * Update Display Picture
 */
export function updateDisplayPicture(formData, token) {
  return async (dispatch) => {

    const toastID = toast.loading("Updating profile picture...");
    try {
        const response= await apiConnector("PUT",
            UPDATE_DISPLAY_PICTURE_API,
            formData,
            {
                Authorisation: `Bearer ${token}`,
            }
        );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      window.location.reload();

      toast.success("Profile picture updated successfully!");
    }
    catch (error) {
      console.error("Error updating profile picture:", error);
      toast.error("Failed to update profile picture.");
    }
    toast.dismiss(toastID);
  };
}

export function updateProfile(profileData, token) {
  return async (dispatch) => {
    const toastID = toast.loading("Updating profile...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, profileData, {
        Authorisation: `Bearer ${token}`,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log("hii",response.data.data);

      const existingUser = JSON.parse(localStorage.getItem("user")) || {};
      const updatedUser = { ...existingUser, ...response.data.data };

      dispatch(setUser(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    } finally {
      toast.dismiss(toastID);
    }
  };
}


export function deleteProfile(token, navigate) {
    return async () => {
      const toastID = toast.loading("Deleting profile...");
      try {
        const response= await apiConnector("DELETE",
            DELETE_PROFILE_API,null,
            {
                Authorisation: `Bearer ${token}`,
            }
        );
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        // Remove token and user info from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
  
        toast.success("Profile deleted successfully!");
  
        // Navigate to home or login page
        navigate("/");
        window.location.reload();  // Ensures the state resets properly
      } catch (error) {
        console.error("Error deleting profile:", error);
        toast.error("Failed to delete profile.");
      }
      toast.dismiss(toastID);
    };
  }
