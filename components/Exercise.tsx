import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputProps {
  name: string;
}

const Exercise: React.FC<InputProps> = ({ name }) => {
  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" },
    name: { marginRight: 20 },
    input: {
      width: 35,
      borderWidth: 1,
      borderRadius: 3,
      userSelect: "none",
      textAlign: "center",
      color: "black",
    },
    arrowToAdjustValue: { margin: 10 },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.arrowToAdjustValue}>{"◀"}</Text>
      <TextInput style={styles.input} readOnly={true} selectTextOnFocus={false} value="20" />
      <Text style={styles.arrowToAdjustValue}>{"▶"}</Text>
    </View>
  );
};

export default Exercise;
