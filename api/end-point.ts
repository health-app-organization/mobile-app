export const baseUrl = "https://appychild.uk/healthapi/api";
// export const baseUrl = "https://Appychild.uk/healthapp-backend";

// ! Otp Urls
export const sendOtpUrl = (userStatus: string): string => `${baseUrl}/${userStatus}/password/reset/request-otp`;
export const verifyOtpUrl = (userStatus: string): string => `${baseUrl}/${userStatus}/password/reset/verify-otp`;
export const resetPasswordUrl = (userStatus: string): string => `${baseUrl}/${userStatus}/password/reset/reset_password`;

//! Auth Urls
//* [userStatus=string (user, provider)]
export const loginUrl = (userStatus: string): string => `${baseUrl}/auth/${userStatus}/login`;
export const registerUrl = (userStatus: string): string =>
    `${baseUrl}/auth/${userStatus}/register`;
export const userProfileUrl = (userStatus: string): string =>
    `${baseUrl}/auth/${userStatus}/me`;

//! Users Urls
export const showUserUrl = (id: string): string => `${baseUrl}/users/${id}`;
export const getAllUsersUrl = `${baseUrl}/users`;
export const createUsersUrl = `${baseUrl}/users/create`;
export const updateUserUrl = (id: string): string => `${baseUrl}/users/update/${id}`;
export const deleteUserUrl = (id: string): string => `${baseUrl}/users/delete/${id}`;
