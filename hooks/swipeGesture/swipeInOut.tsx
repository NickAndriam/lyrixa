import { useRef } from "react";
import { PanResponder, Animated } from "react-native";

const useSwipeInOut = (
  onClose: () => void,
  onOpen: () => void,
  elementWidth: number,
  touchSensitivity: number = 10 // Adjust sensitivity here (default is 10)
) => {
  const panX = useRef(new Animated.Value(0)).current;
  const isSwipedRight = useRef(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (_, gestureState) => {
      // Check if the touch is on a clickable element (e.g., a button)
      // If it is, don't set the pan responder
      if (gestureState.dx === 0 && gestureState.dy === 0) {
        return false;
      }
      return true;
    },
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Recognize when horizontal movement exceeds the specified sensitivity threshold
      return (
        Math.abs(gestureState.dx) > touchSensitivity ||
        Math.abs(gestureState.dy) > touchSensitivity
      );
    },
    onPanResponderMove: (_, gestureState) => {
      if (!isSwipedRight.current) {
        // Constrain to moving only to the right if not already swiped right
        panX.setValue(Math.max(gestureState.dx, 0));
      } else {
        // Allow full horizontal movement if already swiped right, but limit left movement
        panX.setValue(Math.max(-elementWidth + gestureState.dx, 0));
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (!isSwipedRight.current) {
        // If swiped left and not already swiped right
        if (gestureState.dx <= -elementWidth / 2) {
          // If swiped to the left beyond half of the element's width, return to the original state with spring animation
          Animated.spring(panX, {
            toValue: 0,
            stiffness: 800, // Adjust stiffness for a smoother animation
            damping: 60, // Adjust damping for smoother animation
            useNativeDriver: false,
          }).start(() => {
            onOpen();
          });
        } else {
          // If not swiped enough to return to the original state, keep it closed
          // but allow further dragging to bring it back
          Animated.timing(panX, {
            toValue: elementWidth,
            duration: 300, // Adjust the duration for the closed state animation
            useNativeDriver: false,
          }).start();
        }
      } else {
        if (gestureState.dx >= elementWidth / 2) {
          // If swiped to the right or beyond half of the element's width, close with spring animation
          Animated.spring(panX, {
            toValue: elementWidth,
            stiffness: 800, // Adjust stiffness for a smoother animation
            damping: 100, // Adjust damping for smoother animation
            useNativeDriver: false,
          }).start(() => {
            onClose();
            isSwipedRight.current = true;
          });
        } else {
          // If not swiped enough to close, reset to the open position with spring animation
          Animated.spring(panX, {
            toValue: 0,
            stiffness: 800, // Adjust stiffness for a smoother animation
            damping: 60, // Adjust damping for smoother animation
            useNativeDriver: false,
          }).start();
        }
      }
    },
  });

  return {
    panX,
    panHandlers: panResponder.panHandlers,
  };
};

export default useSwipeInOut;
