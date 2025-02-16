const BASE_URL = process.env.REACT_APP_BASE_URL

//AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

//PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
}


//COURSE ENDPOINTS
export const blogEndpoints = {
    GET_ALL_BLOGS_API: BASE_URL + "/blog/auth/getAllBlogs",
    CREATE_BLOG_API: BASE_URL + "/blog/auth/createBlog",
    GET_BLOG_DETAILS_API: BASE_URL + "/blog/auth/getBlogDetails"
}

//CONTACT-US API
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/contact/contactus",
}

//SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}