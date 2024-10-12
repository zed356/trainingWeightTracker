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
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      width: "100%",
    },
    name: { marginRight: 0, width: "50%", textAlign: "center" },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    input: {
      width: 35,
      borderWidth: 1,
      borderRadius: 3,
      userSelect: "none",
      textAlign: "center",
      color: "black",
      marginLeft: 4,
      marginRight: 4,
    },
    arrowToAdjustValue: { userSelect: "none", fontSize: 24 },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.inputContainer}>
        <AnimatedButton iconToDisplay="◀" handleValue={decreaseValue} />
        <TextInput
          style={styles.input}
          readOnly={true}
          selectTextOnFocus={false}
          value={value.toString()}
        />
        <AnimatedButton iconToDisplay="▶" handleValue={increaseValue} />
      </View>
    </View>
  );
};

export default Exercise;
