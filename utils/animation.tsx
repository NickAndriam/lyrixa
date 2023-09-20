import { MotionTransition } from "@legendapp/motion";
import React, { useRef } from "react";
import { PanResponder, Animated } from "react-native";

export const smoothTransition: MotionTransition = {
  type: "spring",
  stiffness: 1000,
  damping: 100,
};

const SwipeOutView: React.FC = () => {
  const panX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          panX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          // Swipe threshold exceeded, animate out with custom spring parameters
          Animated.spring(panX, {
            toValue: 300, // Adjust the value as needed
            stiffness: 1500, // Increased stiffness for a stiffer animation
            damping: 100, // Custom damping
            useNativeDriver: false,
          }).start();
        } else {
          // Not swiped enough, reset to the initial position with custom spring parameters
          Animated.spring(panX, {
            toValue: 0,
            stiffness: 1500, // Increased stiffness for a stiffer animation
            damping: 100, // Custom damping
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateX: panX }],
        backgroundColor: "lightblue",
        width: 300,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...panResponder.panHandlers}
    >
      {/* Content of the view */}
    </Animated.View>
  );
};

export default SwipeOutView;
