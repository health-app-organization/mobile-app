import AsyncStorage from "@react-native-async-storage/async-storage"

const BaseUrl = `https://appychild.uk/healthapi`

// !Registeration Endpoints
export const registerUrlone = `${BaseUrl}/auth/user/register`
export const registerUrltwo = `${BaseUrl}/auth/user/verify_otp`



//! Auth Urls
//get userStatus
export const userStatus = async () => {
    const userStatus = await AsyncStorage.getItem('role')
    return userStatus
}

//* [userStatus=string (user, provider)]
// export const loginUrl = `${BaseUrl}/auth/${userStatus()}/login`;
export const userLoginUrl = `${BaseUrl}/auth/user/login`;
export const providerLoginUrl = `${BaseUrl}/auth/provider/login`;
export const createUsersUrl = `${BaseUrl}/users/create`;

// export const userProfileUrl = (userStatus) =>
//     `${BaseUrl}/auth/${userStatus}/me`;

// //! Users Urls
// export const showUserUrl = (id) => `${baseUrl}/users/${id}`;
// export const getAllUsersUrl = `${baseUrl}/users`;
//
// export const updateUserUrl = (id) => `${baseUrl}/users/update/${id}`;
// export const deleteUserUrl = (id) => `${baseUrl}/users/delete/${id}`;

// export const baseUrl = "https://Appychild.uk/healthapp-backend";
// // ! Otp Urls
// export const sendOtpUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/request-otp`;
// export const verifyOtpUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/verify-otp`;
// export const resetPasswordUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/reset_password`;

