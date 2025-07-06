import { ArrowUpIcon } from "../assets/iconsvg/Svgicon";

import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { primarycolor } from "../constants/colors";
import { Textstyles } from "../constants/fontsize";

interface DataItem {
  value: string;
  label: string;
}

interface DataDisplayModalProps {
  data: DataItem[];
  setshowmodal: (show: boolean) => void;
  setSelectedValue: (value: string) => void;
  title: string;
}

export const DataDisplayModal: React.FC<DataDisplayModalProps> = ({
  data,
  setshowmodal,
  setSelectedValue,
  title,
}) => {
  return (
    <>
      <View
        style={{ backgroundColor: primarycolor }}
        className="opacity-70 h-full w-full absolute"
      />
      <View className="h-[30vh] w-[80vw] relative z-50 rounded-2xl bg-white px-3 py-3">
        <View className="justify-between flex-row">
          <Text style={[Textstyles.text_xmedium]}>{title}</Text>
          <TouchableOpacity onPress={() => setshowmodal(false)}>
            <ArrowUpIcon />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="py-4">
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="h-12 border-b border-slate-100 flex justify-center"
                onPress={() => {
                  setSelectedValue(item.value);
                  setshowmodal(false);
                }}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
