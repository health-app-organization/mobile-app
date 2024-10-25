import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "../mycomponents/mycomponent";

const Medical = () => (
  <View>
    <Text>Allergy: Any allergy?</Text>
    <Text>Current Medication: Any current medication?</Text>
    <Text>Past Medication: Any past medication?</Text>
    <Text>Chronic Disease: Any chronic diseases?</Text>
    <Text>Injuries: Any injuries?</Text>
  </View>
);

export default Medical;
