export const baseUrl = "https://appychild.uk/healthapi/api";
// export const baseUrl = "https://Appychild.uk/healthapp-backend";

// ! Otp Urls
export const sendOtpUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/request-otp`;
export const verifyOtpUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/verify-otp`;
export const resetPasswordUrl = (userStatus) => `${baseUrl}/${userStatus}/password/reset/reset_password`;

//! Auth Urls
//* [userStatus=string (user, provider)]
export const loginUrl = (userStatus) => `${baseUrl}/auth/${userStatus}/login`;
export const registerUrl = (userStatus) =>
    `${baseUrl}/auth/${userStatus}/register`;
export const userProfileUrl = (userStatus) =>
    `${baseUrl}/auth/${userStatus}/me`;

//! Users Urls
export const showUserUrl = (id) => `${baseUrl}/users/${id}`;
export const getAllUsersUrl = `${baseUrl}/users`;
export const createUsersUrl = `${baseUrl}/users/create`;
export const updateUserUrl = (id) => `${baseUrl}/users/update/${id}`;
export const deleteUserUrl = (id) => `${baseUrl}/users/delete/${id}`;
