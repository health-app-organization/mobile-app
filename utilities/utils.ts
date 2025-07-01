import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { captureRef } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { PermissionsAndroid, Platform } from "react-native";

export const Utils = {
  /**
   * Validates an email address.
   *
   * @param {string} email The email address to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  validateEmail: (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validates the length of a password.
   *
   * @param {string} password The password to validate.
   * @param {number} minLength The minimum required length.
   * @returns {boolean} True if the password meets the minimum length, false otherwise.
   */
  validatePasswordLength: (
    password: string,
    minLength: number = 8
  ): boolean => {
    if (password === "") return true; // Allow empty passwords for some reason?
    return password.length >= minLength;
  },

  /**
   * Validates if two passwords match.
   *
   * @param {string} password The first password.
   * @param {confirmPassword} The second password to compare.
   * @returns {boolean} True if the passwords match, false otherwise.
   */
  validateConfirmPassword: (
    password: string,
    confirmPassword: string
  ): boolean => {
    if (password === "") return true; // Allow empty passwords for some reason?
    return password === confirmPassword;
  },

  /**
   * Converts a Comment object to a JSON string.
   *
   * @param {Comment} comment - The Comment object to be converted.
   * @returns {string} The JSON string representation of the Comment object.
   */
  commentToString: (comment: Comment): string => {
    return JSON.stringify(comment);
  },

  /**
   * Converts a JSON string to a Comment object.
   *
   * @param {string} jsonString - The JSON string to be parsed.
   * @returns {Comment} The Comment object parsed from the JSON string.
   */
  stringToComment: (jsonString: string): Comment => {
    return JSON.parse(jsonString) as Comment;
  },

  /**
   * Formats a number with a suffix (e.g., 1K, 1M, 1B).
   *
   * @param {number} num The number to format.
   * @returns {string} The formatted number with a suffix.
   */
  formatCounter: (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  },

  /**
   * Formats a duration given in seconds into a human-readable string.
   * Displays HH:MM:SS if hours are present, otherwise MM:SS.
   * Returns "00:00" if the duration is 0 or negative.
   *
   * @param {number} duration The duration in seconds.
   * @returns {string} The formatted duration string.
   * @example
   * formatDuration(0);     // Returns "00:00"
   * formatDuration(5);     // Returns "00:05"
   * formatDuration(65);    // Returns "01:05"
   * formatDuration(3600);  // Returns "01:00:00"
   * formatDuration(3665);  // Returns "01:01:05"
   * formatDuration(10000);  // Returns "02:46:40"
   * formatDuration(-5);    // Returns "00:00"
   */
  formatDuration: (duration: number): string => {
    if (duration <= 0) {
      return "00:00";
    }

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.ceil(duration % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    if (hours > 0) {
      const formattedHours = String(hours).padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  },

  getUserId: async (): Promise<string> => {
    try {
      const userId = await AsyncStorage.getItem("user_Id");
      console.log("User ID:", userId);

      return userId ? userId : "none"; // replace "defaultUserId" with your default logic if needed
    } catch (error) {
      console.error("Error retrieving user ID:", error);
      return "none"; // replace "defaultUserId" with your default logic if needed
    }
  },

  /**
   * Truncates the local part of an email address by masking a portion of it with asterisks (`*`).
   * Ensures at least half of the local part, or a minimum of one character, is visible.
   *
   * @param {string} email - The email address to truncate.
   * @returns {string} - The email address with a truncated local part.
   *
   * @throws {Error} If the input email is invalid or does not contain an "@" symbol.
   *
   * @example
   * truncateEmail("example@example.com"); // Returns "****ple@example.com"
   * truncateEmail("a@domain.com");        // Returns "a@domain.com"
   * truncateEmail("ab@domain.com");       // Returns "*b@domain.com"
   */
  truncateEmail: (email: string): string => {
    // Validate email structure
    if (!email.includes("@")) {
      throw new Error("Invalid email format");
    }

    const [localPart, domain] = email.split("@");

    // Ensure local part and domain are valid
    if (!localPart || !domain) {
      throw new Error("Invalid email format");
    }

    // Determine the number of visible characters
    const visibleChars = Math.max(1, Math.ceil(localPart.length / 2));

    // Create the masked local part
    const maskedLocalPart =
      "*".repeat(localPart.length - visibleChars) +
      localPart.slice(-visibleChars);

    return `${maskedLocalPart}@${domain}`;
  },

  /**
   * Computes the grade based on the given score.
   *
   * - "A" for scores 75 and above.
   * - "B" for scores 65 to 74.
   * - "C" for scores 55 to 64.
   * - "F" for scores below 55.
   *
   * @param score - The numeric score to evaluate.
   * @returns The corresponding grade as a string.
   */
  computeGrade(score: number): string {
    if (score >= 75) return "A";
    if (score >= 65) return "B";
    if (score >= 55) return "C";
    return "F";
  },

  /**
   * Formats an ISO date string into a human-readable format.
   *
   * This function converts an ISO formatted date string (in UTC)
   * into a string formatted as "Weekday dd/mm/yy".
   *
   * @param isoDate - The ISO formatted date string (e.g., "2025-02-14T13:17:56.000000Z")
   * @returns A formatted date string in the format "Weekday dd/mm/yy"
   *
   * @example
   * // returns "Friday 14/02/25"
   * formatDate("2025-02-14T13:17:56.000000Z");
   */
  formatDateToDays(isoDate: string): string {
    // Create a Date object from the ISO string
    const date = new Date(isoDate);

    // Define an array of full weekday names (using UTC values)
    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekday = weekdayNames[date.getUTCDay()];

    // Get the day and month (getUTCMonth() returns 0-11, hence add 1 for correct month number)
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");

    // Extract the last two digits of the year
    const year = String(date.getUTCFullYear()).slice(-2);

    // Return the formatted string: "Weekday dd/mm/yy"
    return `${weekday} ${day}/${month}/${year}`;
  },

  /**
   * Returns a random element from the provided array.
   *
   * @template T
   * @param {T[]} arr - The array to choose from.
   * @returns {(T | undefined)} A random element from the array, or undefined if the array is empty.
   */
  getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * Parses a JSON-encoded string into an array of strings.
   *
   * @param {string} jsonString - The JSON string to parse.
   * @returns {string[]} The parsed array of strings.
   * @throws {Error} If the input is not valid JSON.
   */
  parseJsonStringArray(jsonString: string): string[] {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Invalid JSON string",
      });
      return [];
    }
  },

  requestStoragePermission: async () => {
    if (Platform.OS === "android") {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      console.log("Has storage permission?", hasPermission);

      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission Required",
            message: "This app needs access to your storage to download files",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  },
  generateScreenshot: async (viewRef: React.RefObject<View>) => {
    try {
      if (!viewRef.current) {
        alert("View is not ready to capture!");
        return;
      }

      const uri = await captureRef(viewRef.current, {
        format: "png",
        quality: 0.8,
      });

      const screenshotName = `calendar_${Date.now()}.png`;
      const newPath = FileSystem.documentDirectory + screenshotName;

      // Use copyAsync for better iOS compatibility
      await FileSystem.copyAsync({ from: uri, to: newPath });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(newPath);
      } else {
        alert("Screenshot saved to " + newPath);
      }
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      alert("An error occurred while capturing the screenshot.");
    }
  },

  /**
   * waits for a specified duration before executing the next line of code.
   *
   * @param {number} ms - The duration to wait in milliseconds.
   */

  wait: async (ms: number) => {
    await new Promise((resolve) => setTimeout(resolve, ms));
  },
  countries: [
    { name: "Nigeria Default", code: "NG", flag: "🇳🇬", dialingCode: "+234" },
    { name: "Afghanistan", code: "AF", flag: "🇦🇫", dialingCode: "+93" },
    { name: "Albania", code: "AL", flag: "🇦🇱", dialingCode: "+355" },
    { name: "Algeria", code: "DZ", flag: "🇩🇿", dialingCode: "+213" },
    { name: "Andorra", code: "AD", flag: "🇦🇩", dialingCode: "+376" },
    { name: "Angola", code: "AO", flag: "🇦🇴", dialingCode: "+244" },
    {
      name: "Antigua and Barbuda",
      code: "AG",
      flag: "🇦🇬",
      dialingCode: "+1-268",
    },
    { name: "Argentina", code: "AR", flag: "🇦🇷", dialingCode: "+54" },
    { name: "Armenia", code: "AM", flag: "🇦🇲", dialingCode: "+374" },
    { name: "Australia", code: "AU", flag: "🇦🇺", dialingCode: "+61" },
    { name: "Austria", code: "AT", flag: "🇦🇹", dialingCode: "+43" },
    { name: "Azerbaijan", code: "AZ", flag: "🇦🇿", dialingCode: "+994" },
    { name: "Bahamas", code: "BS", flag: "🇧🇸", dialingCode: "+1-242" },
    { name: "Bahrain", code: "BH", flag: "🇧🇭", dialingCode: "+973" },
    { name: "Bangladesh", code: "BD", flag: "🇧🇩", dialingCode: "+880" },
    { name: "Barbados", code: "BB", flag: "🇧🇧", dialingCode: "+1-246" },
    { name: "Belarus", code: "BY", flag: "🇧🇾", dialingCode: "+375" },
    { name: "Belgium", code: "BE", flag: "🇧🇪", dialingCode: "+32" },
    { name: "Belize", code: "BZ", flag: "🇧🇿", dialingCode: "+501" },
    { name: "Benin", code: "BJ", flag: "🇧🇯", dialingCode: "+229" },
    { name: "Bhutan", code: "BT", flag: "🇧🇹", dialingCode: "+975" },
    { name: "Bolivia", code: "BO", flag: "🇧🇴", dialingCode: "+591" },
    {
      name: "Bosnia and Herzegovina",
      code: "BA",
      flag: "🇧🇦",
      dialingCode: "+387",
    },
    { name: "Botswana", code: "BW", flag: "🇧🇼", dialingCode: "+267" },
    { name: "Brazil", code: "BR", flag: "🇧🇷", dialingCode: "+55" },
    { name: "Brunei", code: "BN", flag: "🇧🇳", dialingCode: "+673" },
    { name: "Bulgaria", code: "BG", flag: "🇧🇬", dialingCode: "+359" },
    { name: "Burkina Faso", code: "BF", flag: "🇧🇫", dialingCode: "+226" },
    { name: "Burundi", code: "BI", flag: "🇧🇮", dialingCode: "+257" },
    { name: "Cabo Verde", code: "CV", flag: "🇨🇻", dialingCode: "+238" },
    { name: "Cambodia", code: "KH", flag: "🇰🇭", dialingCode: "+855" },
    { name: "Cameroon", code: "CM", flag: "🇨🇲", dialingCode: "+237" },
    { name: "Canada", code: "CA", flag: "🇨🇦", dialingCode: "+1" },
    {
      name: "Central African Republic",
      code: "CF",
      flag: "🇨🇫",
      dialingCode: "+236",
    },
    { name: "Chad", code: "TD", flag: "🇹🇩", dialingCode: "+235" },
    { name: "Chile", code: "CL", flag: "🇨🇱", dialingCode: "+56" },
    { name: "China", code: "CN", flag: "🇨🇳", dialingCode: "+86" },
    { name: "Colombia", code: "CO", flag: "🇨🇴", dialingCode: "+57" },
    { name: "Comoros", code: "KM", flag: "🇰🇲", dialingCode: "+269" },
    { name: "Congo", code: "CG", flag: "🇨🇬", dialingCode: "+242" },
    { name: "Congo (DRC)", code: "CD", flag: "🇨🇩", dialingCode: "+243" },
    { name: "Costa Rica", code: "CR", flag: "🇨🇷", dialingCode: "+506" },
    { name: "Croatia", code: "HR", flag: "🇭🇷", dialingCode: "+385" },
    { name: "Cuba", code: "CU", flag: "🇨🇺", dialingCode: "+53" },
    { name: "Cyprus", code: "CY", flag: "🇨🇾", dialingCode: "+357" },
    { name: "Czech Republic", code: "CZ", flag: "🇨🇿", dialingCode: "+420" },
    { name: "Denmark", code: "DK", flag: "🇩🇰", dialingCode: "+45" },
    { name: "Djibouti", code: "DJ", flag: "🇩🇯", dialingCode: "+253" },
    { name: "Dominica", code: "DM", flag: "🇩🇲", dialingCode: "+1-767" },
    {
      name: "Dominican Republic",
      code: "DO",
      flag: "🇩🇴",
      dialingCode: "+1-809",
    },
    { name: "Ecuador", code: "EC", flag: "🇪🇨", dialingCode: "+593" },
    { name: "Egypt", code: "EG", flag: "🇪🇬", dialingCode: "+20" },
    { name: "El Salvador", code: "SV", flag: "🇸🇻", dialingCode: "+503" },
    { name: "Equatorial Guinea", code: "GQ", flag: "🇬🇶", dialingCode: "+240" },
    { name: "Eritrea", code: "ER", flag: "🇪🇷", dialingCode: "+291" },
    { name: "Estonia", code: "EE", flag: "🇪🇪", dialingCode: "+372" },
    { name: "Eswatini", code: "SZ", flag: "🇸🇿", dialingCode: "+268" },
    { name: "Ethiopia", code: "ET", flag: "🇪🇹", dialingCode: "+251" },
    { name: "Fiji", code: "FJ", flag: "🇫🇯", dialingCode: "+679" },
    { name: "Finland", code: "FI", flag: "🇫🇮", dialingCode: "+358" },
    { name: "France", code: "FR", flag: "🇫🇷", dialingCode: "+33" },
    { name: "Gabon", code: "GA", flag: "🇬🇦", dialingCode: "+241" },
    { name: "Gambia", code: "GM", flag: "🇬🇲", dialingCode: "+220" },
    { name: "Georgia", code: "GE", flag: "🇬🇪", dialingCode: "+995" },
    { name: "Germany", code: "DE", flag: "🇩🇪", dialingCode: "+49" },
    { name: "Ghana", code: "GH", flag: "🇬🇭", dialingCode: "+233" },
    { name: "Greece", code: "GR", flag: "🇬🇷", dialingCode: "+30" },
    { name: "Grenada", code: "GD", flag: "🇬🇩", dialingCode: "+1-473" },
    { name: "Guatemala", code: "GT", flag: "🇬🇹", dialingCode: "+502" },
    { name: "Guinea", code: "GN", flag: "🇬🇳", dialingCode: "+224" },
    { name: "Guinea-Bissau", code: "GW", flag: "🇬🇼", dialingCode: "+245" },
    { name: "Guyana", code: "GY", flag: "🇬🇾", dialingCode: "+592" },
    { name: "Haiti", code: "HT", flag: "🇭🇹", dialingCode: "+509" },
    { name: "Honduras", code: "HN", flag: "🇭🇳", dialingCode: "+504" },
    { name: "Hungary", code: "HU", flag: "🇭🇺", dialingCode: "+36" },
    { name: "Iceland", code: "IS", flag: "🇮🇸", dialingCode: "+354" },
    { name: "India", code: "IN", flag: "🇮🇳", dialingCode: "+91" },
    { name: "Indonesia", code: "ID", flag: "🇮🇩", dialingCode: "+62" },
    { name: "Iran", code: "IR", flag: "🇮🇷", dialingCode: "+98" },
    { name: "Iraq", code: "IQ", flag: "🇮🇶", dialingCode: "+964" },
    { name: "Ireland", code: "IE", flag: "🇮🇪", dialingCode: "+353" },
    { name: "Israel", code: "IL", flag: "🇮🇱", dialingCode: "+972" },
    { name: "Italy", code: "IT", flag: "🇮🇹", dialingCode: "+39" },
    { name: "Jamaica", code: "JM", flag: "🇯🇲", dialingCode: "+1-876" },
    { name: "Japan", code: "JP", flag: "🇯🇵", dialingCode: "+81" },
    { name: "Jordan", code: "JO", flag: "🇯🇴", dialingCode: "+962" },
    { name: "Kazakhstan", code: "KZ", flag: "🇰🇿", dialingCode: "+7" },
    { name: "Kenya", code: "KE", flag: "🇰🇪", dialingCode: "+254" },
    { name: "Kiribati", code: "KI", flag: "🇰🇮", dialingCode: "+686" },
    { name: "Kuwait", code: "KW", flag: "🇰🇼", dialingCode: "+965" },
    { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬", dialingCode: "+996" },
    { name: "Laos", code: "LA", flag: "🇱🇦", dialingCode: "+856" },
    { name: "Latvia", code: "LV", flag: "🇱🇻", dialingCode: "+371" },
    { name: "Lebanon", code: "LB", flag: "🇱🇧", dialingCode: "+961" },
    { name: "Lesotho", code: "LS", flag: "🇱🇸", dialingCode: "+266" },
    { name: "Liberia", code: "LR", flag: "🇱🇷", dialingCode: "+231" },
    { name: "Libya", code: "LY", flag: "🇱🇾", dialingCode: "+218" },
    { name: "Liechtenstein", code: "LI", flag: "🇱🇮", dialingCode: "+423" },
    { name: "Lithuania", code: "LT", flag: "🇱🇹", dialingCode: "+370" },
    { name: "Luxembourg", code: "LU", flag: "🇱🇺", dialingCode: "+352" },
    { name: "Madagascar", code: "MG", flag: "🇲🇬", dialingCode: "+261" },
    { name: "Malawi", code: "MW", flag: "🇲🇼", dialingCode: "+265" },
    { name: "Malaysia", code: "MY", flag: "🇲🇾", dialingCode: "+60" },
    { name: "Maldives", code: "MV", flag: "🇲🇻", dialingCode: "+960" },
    { name: "Mali", code: "ML", flag: "🇲🇱", dialingCode: "+223" },
    { name: "Malta", code: "MT", flag: "🇲🇹", dialingCode: "+356" },
    { name: "Marshall Islands", code: "MH", flag: "🇲🇭", dialingCode: "+692" },
    { name: "Mauritania", code: "MR", flag: "🇲🇷", dialingCode: "+222" },
    { name: "Mauritius", code: "MU", flag: "🇲🇺", dialingCode: "+230" },
    { name: "Mexico", code: "MX", flag: "🇲🇽", dialingCode: "+52" },
    { name: "Micronesia", code: "FM", flag: "🇫🇲", dialingCode: "+691" },
    { name: "Moldova", code: "MD", flag: "🇲🇩", dialingCode: "+373" },
    { name: "Monaco", code: "MC", flag: "🇲🇨", dialingCode: "+377" },
    { name: "Mongolia", code: "MN", flag: "🇲🇳", dialingCode: "+976" },
    { name: "Montenegro", code: "ME", flag: "🇲🇪", dialingCode: "+382" },
    { name: "Morocco", code: "MA", flag: "🇲🇦", dialingCode: "+212" },
    { name: "Mozambique", code: "MZ", flag: "🇲🇿", dialingCode: "+258" },
    { name: "Myanmar", code: "MM", flag: "🇲🇲", dialingCode: "+95" },
    { name: "Namibia", code: "NA", flag: "🇳🇦", dialingCode: "+264" },
    { name: "Nauru", code: "NR", flag: "🇳🇷", dialingCode: "+674" },
    { name: "Nepal", code: "NP", flag: "🇳🇵", dialingCode: "+977" },
    { name: "Netherlands", code: "NL", flag: "🇳🇱", dialingCode: "+31" },
    { name: "New Zealand", code: "NZ", flag: "🇳🇿", dialingCode: "+64" },
    { name: "Nicaragua", code: "NI", flag: "🇳🇮", dialingCode: "+505" },
    { name: "Niger", code: "NE", flag: "🇳🇪", dialingCode: "+227" },
    { name: "Nigeria", code: "NG", flag: "🇳🇬", dialingCode: "+234" },
    { name: "North Korea", code: "KP", flag: "🇰🇵", dialingCode: "+850" },
    { name: "North Macedonia", code: "MK", flag: "🇲🇰", dialingCode: "+389" },
    { name: "Norway", code: "NO", flag: "🇳🇴", dialingCode: "+47" },
    { name: "Oman", code: "OM", flag: "🇴🇲", dialingCode: "+968" },
    { name: "Pakistan", code: "PK", flag: "🇵🇰", dialingCode: "+92" },
    { name: "Palau", code: "PW", flag: "🇵🇼", dialingCode: "+680" },
    { name: "Panama", code: "PA", flag: "🇵🇦", dialingCode: "+507" },
    { name: "Papua New Guinea", code: "PG", flag: "🇵🇬", dialingCode: "+675" },
    { name: "Paraguay", code: "PY", flag: "🇵🇾", dialingCode: "+595" },
    { name: "Peru", code: "PE", flag: "🇵🇪", dialingCode: "+51" },
    { name: "Philippines", code: "PH", flag: "🇵🇭", dialingCode: "+63" },
    { name: "Poland", code: "PL", flag: "🇵🇱", dialingCode: "+48" },
    { name: "Portugal", code: "PT", flag: "🇵🇹", dialingCode: "+351" },
    { name: "Qatar", code: "QA", flag: "🇶🇦", dialingCode: "+974" },
    { name: "Romania", code: "RO", flag: "🇷🇴", dialingCode: "+40" },
    { name: "Russia", code: "RU", flag: "🇷🇺", dialingCode: "+7" },
    { name: "Rwanda", code: "RW", flag: "🇷🇼", dialingCode: "+250" },
    {
      name: "Saint Kitts and Nevis",
      code: "KN",
      flag: "🇰🇳",
      dialingCode: "+1-869",
    },
    { name: "Saint Lucia", code: "LC", flag: "🇱🇨", dialingCode: "+1-758" },
    {
      name: "Saint Vincent and the Grenadines",
      code: "VC",
      flag: "🇻🇨",
      dialingCode: "+1-784",
    },
    { name: "Samoa", code: "WS", flag: "🇼🇸", dialingCode: "+685" },
    { name: "San Marino", code: "SM", flag: "🇸🇲", dialingCode: "+378" },
    {
      name: "Sao Tome and Principe",
      code: "ST",
      flag: "🇸🇹",
      dialingCode: "+239",
    },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", dialingCode: "+966" },
    { name: "Senegal", code: "SN", flag: "🇸🇳", dialingCode: "+221" },
    { name: "Serbia", code: "RS", flag: "🇷🇸", dialingCode: "+381" },
    { name: "Seychelles", code: "SC", flag: "🇸🇨", dialingCode: "+248" },
    { name: "Sierra Leone", code: "SL", flag: "🇸🇱", dialingCode: "+232" },
    { name: "Singapore", code: "SG", flag: "🇸🇬", dialingCode: "+65" },
    { name: "Slovakia", code: "SK", flag: "🇸🇰", dialingCode: "+421" },
    { name: "Slovenia", code: "SI", flag: "🇸🇮", dialingCode: "+386" },
    { name: "Solomon Islands", code: "SB", flag: "🇸🇧", dialingCode: "+677" },
    { name: "Somalia", code: "SO", flag: "🇸🇴", dialingCode: "+252" },
    { name: "South Africa", code: "ZA", flag: "🇿🇦", dialingCode: "+27" },
    { name: "South Korea", code: "KR", flag: "🇰🇷", dialingCode: "+82" },
    { name: "South Sudan", code: "SS", flag: "🇸🇸", dialingCode: "+211" },
    { name: "Spain", code: "ES", flag: "🇪🇸", dialingCode: "+34" },
    { name: "Sri Lanka", code: "LK", flag: "🇱🇰", dialingCode: "+94" },
    { name: "Sudan", code: "SD", flag: "🇸🇩", dialingCode: "+249" },
    { name: "Suriname", code: "SR", flag: "🇸🇷", dialingCode: "+597" },
    { name: "Sweden", code: "SE", flag: "🇸🇪", dialingCode: "+46" },
    { name: "Switzerland", code: "CH", flag: "🇨🇭", dialingCode: "+41" },
    { name: "Syria", code: "SY", flag: "🇸🇾", dialingCode: "+963" },
    { name: "Tajikistan", code: "TJ", flag: "🇹🇯", dialingCode: "+992" },
    { name: "Tanzania", code: "TZ", flag: "🇹🇿", dialingCode: "+255" },
    { name: "Thailand", code: "TH", flag: "🇹🇭", dialingCode: "+66" },
    { name: "Togo", code: "TG", flag: "🇹🇬", dialingCode: "+228" },
    { name: "Tonga", code: "TO", flag: "🇹🇴", dialingCode: "+676" },
    {
      name: "Trinidad and Tobago",
      code: "TT",
      flag: "🇹🇹",
      dialingCode: "+1-868",
    },
    { name: "Tunisia", code: "TN", flag: "🇹🇳", dialingCode: "+216" },
    { name: "Turkey", code: "TR", flag: "🇹🇷", dialingCode: "+90" },
    { name: "Turkmenistan", code: "TM", flag: "🇹🇲", dialingCode: "+993" },
    { name: "Tuvalu", code: "TV", flag: "🇹🇻", dialingCode: "+688" },
    { name: "Uganda", code: "UG", flag: "🇺🇬", dialingCode: "+256" },
    { name: "Ukraine", code: "UA", flag: "🇺🇦", dialingCode: "+380" },
    {
      name: "United Arab Emirates",
      code: "AE",
      flag: "🇦🇪",
      dialingCode: "+971",
    },
    { name: "United Kingdom", code: "GB", flag: "🇬🇧", dialingCode: "+44" },
    { name: "United States", code: "US", flag: "🇺🇸", dialingCode: "+1" },
    { name: "Uruguay", code: "UY", flag: "🇺🇾", dialingCode: "+598" },
    { name: "Uzbekistan", code: "UZ", flag: "🇺🇿", dialingCode: "+998" },
    { name: "Vanuatu", code: "VU", flag: "🇻🇺", dialingCode: "+678" },
    { name: "Vatican City", code: "VA", flag: "🇻🇦", dialingCode: "+379" },
    { name: "Venezuela", code: "VE", flag: "🇻🇪", dialingCode: "+58" },
    { name: "Vietnam", code: "VN", flag: "🇻🇳", dialingCode: "+84" },
    { name: "Yemen", code: "YE", flag: "🇾🇪", dialingCode: "+967" },
    { name: "Zambia", code: "ZM", flag: "🇿🇲", dialingCode: "+260" },
    { name: "Zimbabwe", code: "ZW", flag: "🇿🇼", dialingCode: "+263" },
    { name: "Taiwan", code: "TW", flag: "🇹🇼", dialingCode: "+886" },
    { name: "Western Sahara", code: "EH", flag: "🇪🇭", dialingCode: "+212" },
  ],
};
