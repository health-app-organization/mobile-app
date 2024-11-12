import React from "react";
import { View, Text } from "react-native";

const EmailDisplay = ({ email }) => {
  // Mask the email
  const maskedEmail = maskEmail(email);

  return <Text>{maskedEmail}</Text>;
};

export default EmailDisplay;

const maskEmail = (email) => {
  // Split the email into local part and domain part
  const [localPart, domainPart] = email.split("@");

  // Mask the last 4 characters of the local part
  const maskedLocalPart = localPart.slice(0, -4).padEnd(localPart.length, "*");

  // Reassemble the masked email
  return `${maskedLocalPart}@${domainPart}`;
};
