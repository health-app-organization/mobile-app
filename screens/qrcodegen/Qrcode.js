import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export const QRCodeScreen = () => {
  return (
    
      <QRCode
        value="https://example.com" // The data encoded in the QR code
        size={40}                  // Size of the QR code
        color="black"               // Color of the QR code
        backgroundColor="white"     // Background color
      />
  
  );
};
