import { View, Text, StyleSheet } from "react-native";
import { Textstyles } from "../constants/fontsize";

// Helper component for drug items
const DrugItem: React.FC<{ name: string; quantity: string }> = ({
  name,
  quantity,
}) => (
  <View style={styles.drugItem}>
    <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>{name}</Text>
    <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
      {`\u2022`} Quantity: {quantity}
    </Text>
  </View>
);

export default DrugItem;

const styles = StyleSheet.create({
  drugItem: {
    marginBottom: 8,
  },
});
