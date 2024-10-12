import Exercise from "@/components/Exercise";
import ExerciseList from "@/components/ExerciseList";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <ExerciseList />
    </View>
  );
}
