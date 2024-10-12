import { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";
import Exercise from "./Exercise";

interface InputPropsArray {
  name: string;
  options: Props[];
}

interface Props {
  name: string;
  increase?: number;
}

const ExerciseList: React.FC<InputPropsArray> = ({ name, options }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      borderWidth: 1,
      marginTop: 20,
      backgroundColor: "#e3e3e3",
    },
    header: {
      fontSize: 20,
      textDecorationLine: "underline",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      {options.map(({ name, increase = 2.5 }) => (
        <Exercise key={name} name={name} increase={increase} />
      ))}
    </View>
  );
};

export default ExerciseList;
