import { useRef } from "react";
import { PanResponder, Animated } from "react-native";

const useSwipeUpDownWithControl = (
  elementHeight: number,
  originalY: number = 0,
  controlAreaHeight: number = 0,
  onSwipeUp: () => void,
  onSwipeDown: () => void
) => {
  const panY = useRef(new Animated.Value(originalY)).current;
  const isControlledRef = useRef(false);

  const controlPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Recognize when vertical movement occurs within the control area
      return (
        Math.abs(gestureState.dy) > 0 && gestureState.moveY <= controlAreaHeight
      );
    },
    onPanResponderMove: (_, gestureState) => {
      if (isControlledRef.current) {
        // If controlled externally, don't update the main element's position
        return;
      }

      // Detect vertical movement within the control area
      const newY = originalY + gestureState.dy;
      if (newY >= originalY) {
        // Update the main element's position
        panY.setValue(newY);

        // Detect swipe direction
        if (gestureState.vy > 0) {
          onSwipeDown(); // Trigger the swipe-down action
        } else {
          onSwipeUp(); // Trigger the swipe-up action
        }
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.vy > 0) {
        // If swipe gesture was in the downward direction (swiping down)
        Animated.spring(panY, {
          toValue: originalY + elementHeight, // Close the element
          stiffness: 800, // Adjust stiffness for smoother animation
          damping: 60, // Adjust damping for smoother animation
          useNativeDriver: false,
        }).start();
      } else {
        // If swipe gesture was in the upward direction (swiping up)
        Animated.spring(panY, {
          toValue: originalY, // Restore to the original position
          stiffness: 800, // Adjust stiffness for smoother animation
          damping: 60, // Adjust damping for smoother animation
          useNativeDriver: false,
        }).start();
      }
    },
  });

  // Function to control the swipe externally
  const controlSwipe = (shouldControl: boolean) => {
    isControlledRef.current = shouldControl;
  };

  return {
    panY,
    controlPanHandlers: controlPanResponder.panHandlers,
    controlSwipe, // Function to externally control the swipe
  };
};

export default useSwipeUpDownWithControl;
