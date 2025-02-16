import { setLoading,setToken} from "../../slices/authSlice"
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
import { endpoints } from "../apis";
import { setUser } from "../../slices/profileSlice";
import { useSelector , getState } from "react-redux";

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
} = endpoints


export function sendOTP(email,navigate){
    return async(dispatch)=>{
        const toastID=toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            
            const response= await apiConnector("POST",SENDOTP_API,{email});

            console.log(response);

            if(!response){
                throw new Error(response.data.message);
            }

            toast.success("OTP sent");
            navigate("/verify-email");
        }

        catch(error){
            console.log(error);
            toast.error("OTP not sent");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastID);
    }
}

export function signup(firstName,lastName,email,password,confirmPassword,otp,navigate){
    return async (dispatch)=>{
        const toastId= toast.loading("true");
        dispatch(setLoading(true));

        try{
            console.log(1);
            const res=await apiConnector("POST",SIGNUP_API,{firstName,lastName,email,password,confirmPassword,otp});
            console.log(2);
            if(!res.data.success){
                throw new Error(res.data.success);
            }
            
            toast.success("Signed Up");
            console.log("Chutiya");
        }
        catch(error){
            console.log("Error in signup");
            toast.error("Not Signup");
        }
        toast.dismiss(toastId);
        navigate("/login");
    }
}


export function login(email,password,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try{
            const response= await apiConnector("POST",LOGIN_API,{email,password});

            console.log("resst",response);

            if(!response.data.success){
                throw new Error(response.data.success);
            }
            toast.success("Login Successful");
            
            dispatch(setToken(response.data.token));


            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            console.log(response.data.user);
            dispatch(setUser({ ...response.data.user, image: userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/");

        }
        catch(error){
            console.log("Error in login");
            toast.error("Not logged in");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function logout(navigate){
    return async(dispatch)=>{
        const toastId=toast.loading(true);
        dispatch(setLoading(true));
        try{
            dispatch(setToken(null));
            dispatch(setUser(null));
            // dispatch(resetCart());
            localStorage.setItem("token",null);
            localStorage.setItem("user",null);
            navigate("/");

            toast.success("Logged Out");
        }
        catch(error){
            console.log("Error in logging out");
            toast.error("Not logged out");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function getResetPasswordToken(email, setEmailSent){
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try{
            const response= await apiConnector("POST",RESETPASSTOKEN_API,{email});

            console.log("Res ",response);

            if(!response.data.success){
                throw new Error(response.data.success);
            }
            toast.success("Reset Email Sent");
            setEmailSent(true);
        }
        catch(error){
            console.log("Reset password token error",error);
            toast.error("Failed to reset the password")
        }
        dispatch(setLoading(false));
    }
}

export function resetPassword(password,confirmPassword, token){
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try{
            const response= await apiConnector("POST",RESETPASSWORD_API,{password,confirmPassword,token});

            console.log("Reset ",response);

            if(!response.data.success){
                    throw new Error(response.data.success);
            }
            toast.success("Password Reset");
        }
        catch(error){
            console.log("Reset password error",error);
            toast.error("Failed to reset")
        }
        dispatch(setLoading(false));
    }
}