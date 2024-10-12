import AsyncStorage from "@react-native-async-storage/async-storage";

interface WeightValues {
  values: ExerciseDay[];
}

interface ExerciseDay {
  exerciseDayName: string;
  exercises: { name: string; value: number }[];
}

export const setWeightValues = async (values: WeightValues) => {
  try {
    const jsonValue = JSON.stringify(values);
    await AsyncStorage.setItem("weight-values", jsonValue);
  } catch (e) {
    // TODO: error handling
  }
};

export const getWeightValues = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("weight-values");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // TODO: error handling
  }
};
