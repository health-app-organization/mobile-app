import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import { Alert } from "react-native"; // Import Alert
import Logout from "./Logout";
import { Utils } from "./utils";

export interface ApiErrorResponse {
  success: boolean;
  message?: string;
  data?: Record<string, string[]>;
}

export interface ApiErrorResponse {
  success: boolean;
  message?: string;
  data?: Record<string, string[]>; // Field-specific errors
}

const DEFAULT_TOAST_VISIBILITY_TIME = 3000;
const STATUS_CODE_TOAST_VISIBILITY_TIME = 5000;
const MAX_TOAST_MESSAGE_LENGTH = 50; // Threshold for using Alert over Toast

/**
 * Displays an error message, using Alert for long messages and Toast for shorter ones.
 */
const displayError = (
  message: string,
  visibilityTime: number = DEFAULT_TOAST_VISIBILITY_TIME
) => {
  if (message.length > MAX_TOAST_MESSAGE_LENGTH) {
    Alert.alert("Error", message);
  } else {
    Toast.show({
      type: "error",
      text1: message,
      visibilityTime: visibilityTime,
    });
  }
};

export const handleMutationError = (
  error: AxiosError<ApiErrorResponse>,
  defaultMessage: string
) => {
  const statusCode = error.response?.status;
  const responseData = error.response?.data;

  // Configuration for specific HTTP status codes
  const statusErrorHandlers: Record<
    number,
    { text: string; action?: () => void }
  > = {
    401: {
      text: "Session expired. Log in again.",
      action: () => {
        Logout(); // Clear session state
      },
    },
    403: {
      text: "Unauthorized access. Please log in.",
      action: () => {
        Logout(); // Clear session state
      },
    },
    404: { text: "Resource not found." },
    408: { text: "Request timeout. Please try again." },
    429: { text: "Too many requests. Try again later." },
    500: { text: "Server error. Please try again later." },
    503: { text: "Service unavailable. Please try again." },
  };

  if (statusCode && statusErrorHandlers[statusCode]) {
    const handler = statusErrorHandlers[statusCode];
    // Predefined messages are short, show as toast directly
    Toast.show({
      type: "error",
      text1: handler.text,
      visibilityTime: STATUS_CODE_TOAST_VISIBILITY_TIME,
    });
    if (handler.action) {
      handler.action();
    }
    return;
  }

  // 1) Structured field errors: { data: { field: ["message"] } }
  if (
    responseData?.data &&
    typeof responseData.data === "object" &&
    !Array.isArray(responseData.data)
  ) {
    Object.values(responseData.data)
      .flat() // Flattens arrays of error messages for a field
      .forEach((msg) =>
        // Assuming individual field error messages are short
        Toast.show({
          type: "error",
          text1: String(msg),
          visibilityTime: DEFAULT_TOAST_VISIBILITY_TIME,
        })
      );
    return;
  }

  // 2) Delimited string message or single string message from responseData.message
  if (responseData?.message && typeof responseData.message === "string") {
    const messages = responseData.message
      .split("::")
      .map((s) => s.trim())
      .filter(Boolean);
    if (messages.length > 0) {
      if (messages.length === 1) {
        // Single message, could be long, use displayError
        displayError(messages[0], DEFAULT_TOAST_VISIBILITY_TIME);
      } else {
        // Multiple messages, check each for length
        messages.forEach((msg) => {
          if (msg.length > MAX_TOAST_MESSAGE_LENGTH) {
            Alert.alert("Error", msg);
          } else {
            Toast.show({
              type: "error",
              text1: msg,
              visibilityTime: DEFAULT_TOAST_VISIBILITY_TIME,
            });
          }
        });
      }
      return;
    }
  }

  // 3) Fallback to Axios error.message or the provided defaultMessage
  // These messages can be of variable length, so use displayError
  displayError(error.message || defaultMessage, DEFAULT_TOAST_VISIBILITY_TIME);
};

export function checkCompanyId(company: string | null) {
  if (!company) {
    Logout(); // Redirect to login
    Toast.show({
      type: "error",
      text1: "No workplace found",
      visibilityTime: 3000,
    });
    Utils.wait(3000);
    throw new AxiosError("get a workplace and try again");
  }
}
