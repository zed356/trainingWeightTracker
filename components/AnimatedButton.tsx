import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface InputProps {
  iconToDisplay: string;
  handleValue: () => void;
}

const AnimatedButton: React.FC<InputProps> = ({ iconToDisplay, handleValue }) => {
  const opacity = useSharedValue(1);

  const handlePressIn = () => {
    opacity.value = withTiming(0.5, { duration: 100 });
  };

  const handlePressOut = () => {
    setTimeout(() => {
      opacity.value = withTiming(1, { duration: 100 });
    }, 100);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const styles = StyleSheet.create({
    arrowToAdjustValue: { userSelect: "none", fontSize: 24 },
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPress={handleValue} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text style={styles.arrowToAdjustValue}>{iconToDisplay}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedButton;
