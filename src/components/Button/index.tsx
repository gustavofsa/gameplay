import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}
