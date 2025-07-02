import React, { JSX } from "react";
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  SuccessToast,
} from "react-native-toast-message";

export const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <SuccessToast
      {...props}
      style={{
        backgroundColor: "lightgreen",
        maxWidth: "93%",
        height: 50,
        borderRadius: 10,
        marginBottom: 30,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: "P500",
        textAlign: "center",
        paddingVertical: 10,
        color: "black",
      }}
    />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: "red",
        maxWidth: "93%",
        height: 50,
        borderRadius: 10,
        marginBottom: 30,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: "P500",
        textAlign: "center",
        paddingVertical: 10,
        color: "white",
      }}
    />
  ),

  info: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: "orange",
        maxWidth: "93%",
        height: 50,
        borderRadius: 10,
        marginBottom: 30,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: "P500",
        textAlign: "center",
        paddingVertical: 10,
        color: "white",
      }}
    />
  ),
};
