// Helper component for consistent detail rows

import { Text, StyleSheet } from "react-native";
import { Textstyles } from "../constants/fontsize";
const DetailRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <Text style={[Textstyles.text_small, styles.detailRow]}>
    <Text style={{ fontWeight: "700" }}>{label}</Text> <Text>{value}</Text>
  </Text>
);

const styles = StyleSheet.create({
  detailRow: {
    marginBottom: 4,
  },
});
export default DetailRow;
