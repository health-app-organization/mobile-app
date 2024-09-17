import { Platform, StyleSheet } from "react-native";
import {
   greycolor,
   greycolorfour,
   primarycolor,
   primarycolortwo,
   whitecolor,
} from "./color";
export const customstyle = StyleSheet.create({
   buttonstyle: {
      height: 55,
      borderRadius: 44,
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   },
   textinputstyle: {
      height: 55,
      borderRadius: 10,
      backgroundColor: greycolor,
      width: "100%",
      paddingLeft: 36,
      // columnGap: 2,
   },
   selectRadioBox: {
      height: "auto",
      borderRadius: 10,
      backgroundColor: greycolor,
      width: "100%",
      paddingHorizontal: 8,
      paddingVertical: 16,
   },
   boxstyle: {
      width: 75,
      height: 72,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: greycolorfour,
   },
});

export const radioButtonStyles = StyleSheet.create({
   radioButton: {
      height: 15,
      width: 15,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: primarycolortwo,
      alignItems: 'center',
      justifyContent: 'center',
   },
   radioButtonSelected: {
      height: 9,
      width: 9,
      borderRadius: 12,
      backgroundColor: primarycolortwo,
   },
})
