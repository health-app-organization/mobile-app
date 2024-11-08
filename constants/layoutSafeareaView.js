import {Platform, StyleSheet} from 'react-native'
import { primarycolor, primarycolortwo, whitecolor } from './color';
export const bgstyles = StyleSheet.create({
    bgcolorprimary: {
        backgroundColor:primarycolor ,
        color: whitecolor,
    },
    bgcolorprimarytwo: {
        backgroundColor:primarycolortwo ,
        color: whitecolor,
    },
    bgcolorwhite: {
        backgroundColor:whitecolor ,
        color: primarycolortwo,
    },

    andriod: {
        paddingTop: Platform.OS === "android" ? 20 : 0,
    },

  });
  
  