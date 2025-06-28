export const baseUrl:string="https://westacare.onrender.com"

// LOGIN
export const loginUrl:string=`${baseUrl}/api/auth/login`
export const registerUrl:string=`${baseUrl}/api/auth/seeker/register`

export const changepasswordUrl=`${baseUrl}/auth/:status/password/reset/request_otp`

export const sendOtpUrl=`${baseUrl}/auth/send-otp`
export const verifyOtpdUrl=`${baseUrl}/auth/verify-otp`


export const passwordresetUrl:string=`${baseUrl}/auth/:status/password/reset/reset_password`

export const registerproviderUrlArtisan:string=`${baseUrl}/auth/provider/register`

// PROFILE

// PROVIDER
//credentials
export const uploadcredentialsUrl:string=`${baseUrl}/provider/upload-`


export const createprofile:string=`${baseUrl}/providers/create-profile`
export const createprofile2:string=`${baseUrl}/providers/create-profile`
export const uploadavatar:string=`${baseUrl}/provider/upload-avatar`

// SEEKER

export const updateprofileUrl:string=`${baseUrl}/seekers/update-profile1`
export const updateprofile2:string=`${baseUrl}/seekers/update-profile2`


// UPLOAD

export const uploadavatarUrl:string=`${baseUrl}/api/upload_avatar`


// NOTIFICATION

export const professionalUrl:string=`${baseUrl}/api/notifications`

// REMINDER
export const createreminderUrl:string=`${baseUrl}/api/reminders`

// FAVORITE
export const addfavoriteUrl:string=`${baseUrl}/api/favourites`

// PAYMENT
// (SEEKER
export const initiateUrl:string=`${baseUrl}/api/payments/initiate-payment`
export const verifyUrl:string=`${baseUrl}/api/payments/verify-payment/:ref`
// PROVIDER
export const initateUrl:string=`${baseUrl}/payments/initiate-transfer`


// ACCOUNTS
export const addacountUrl:string=`${baseUrl}/api/accounts`

// FEEDBACK
export const givefeedbackUrl:string=`${baseUrl}/accounts`

// AVAILABILITY
export const addavailability:string=`${baseUrl}/api/availabilities`

// TESTREPORT
export const addtestreport=`${baseUrl}/api/availabilities`

// WALLETS

export const debitwalletUrl=`${baseUrl}/api/debit-wallet`
export const setpinUrl=`${baseUrl}/api/set-pin`

