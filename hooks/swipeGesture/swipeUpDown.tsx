import { useRef } from "react";
import { PanResponder, Animated } from "react-native";

const useSwipeUpDown = (elementHeight: number, originalY: number = 0) => {
  const panY = useRef(new Animated.Value(originalY)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Recognize when vertical movement occurs (up or down)
      return Math.abs(gestureState.dy) > 0;
    },
    onPanResponderMove: (_, gestureState) => {
      const newY = originalY + gestureState.dy;
      // Limit the swipe up action to not go over the original state
      if (newY >= originalY) {
        panY.setValue(newY);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.vy > 0) {
        // If swipe gesture was in the downward direction (swiping down)
        Animated.spring(panY, {
          toValue: originalY + elementHeight, // Close the element
          stiffness: 800,
          damping: 60,
          useNativeDriver: false,
        }).start();
      } else {
        // If swipe gesture was in the upward direction (swiping up)
        Animated.spring(panY, {
          toValue: originalY, // Restore to the original position
          stiffness: 800,
          damping: 60,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return {
    panY,
    panHandlers: panResponder.panHandlers,
  };
};

export default useSwipeUpDown;
