import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IconProps {
  autoActive?: boolean;
  icon?: any;
  name?: string;
  secondName?: string;
  size?: number;
  color?: string;
  activeColor?: string;
  bgColor?: string;
  className?: string;
  onPress?: () => void;
}

export function MyIcon({ onPress = () => {}, ...props }: IconProps) {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.autoActive) setActive(true);
  }, [props.autoActive]);

  const onAction: any = () => {
    onPress();
    setActive(!active);
    if (props.autoActive) setActive(true);
  };

  const chosenColor: any = () => {
    return active ? props.activeColor ?? props.activeColor : props.color;
  };
  const chosenName: any = () => {
    return active ? props.secondName ?? props.name : props.name;
  };

  return (
    <TouchableOpacity
      onPress={onAction}
      className={`${props.bgColor} ${props.className}`}
    >
      <props.icon name={chosenName()} size={props.size} color={chosenColor()} />
    </TouchableOpacity>
  );
}
