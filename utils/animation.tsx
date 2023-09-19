import { MotionTransition } from "@legendapp/motion";

export const smoothTransition: MotionTransition = {
  type: "spring",
  stiffness: 1000,
  damping: 100,
};
