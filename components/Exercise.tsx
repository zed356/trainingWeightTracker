import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import AnimatedButton from "./AnimatedButton";

interface InputProps {
  name: string;
  increase: number;
}

const Exercise: React.FC<InputProps> = ({ name, increase }) => {
  const [value, setValue] = useState(20);

  // Function to increase the state value
  const increaseValue = () => {
    setValue((prevValue) => prevValue + increase);
  };

  // Function to decrease the state value
  const decreaseValue = () => {
    setValue((prevValue) => prevValue - increase);
  };

  // styles

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
    arrowToAdjustValue: { userSelect: "none", fontSize: 24 },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <AnimatedButton iconToDisplay="◀" handleValue={decreaseValue} />
      <TextInput
        style={styles.input}
        readOnly={true}
        selectTextOnFocus={false}
        value={value.toString()}
      />
      <AnimatedButton iconToDisplay="▶" handleValue={increaseValue} />
    </View>
  );
};

export default Exercise;
