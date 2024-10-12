import Exercise from "@/components/Exercise";
import ExerciseList from "@/components/ExerciseList";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginTop: 30,
      marginBottom: 30,
      maxWidth: "70%",
    },
  });

  const workoutA = [{ name: "Squat" }, { name: "Flat Bench Press" }, { name: "Barbell Rows" }];
  const workoutB = [
    { name: "Squat" },
    { name: "Overhead Press" },
    { name: "Deadlift", increase: 5 },
  ];

  return (
    <View style={styles.container}>
      <ExerciseList name={"Day A"} options={workoutA} />
      <ExerciseList name={"Day B"} options={workoutB} />
    </View>
  );
}
