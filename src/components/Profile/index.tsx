import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../hooks/Auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

type ProfileProps = {
  openSignOutModal: () => void;
}

export function Profile({ openSignOutModal }: ProfileProps) {
  const { user } = useAuth();

  return(
    <View style={styles.container}>

      <RectButton onPress={openSignOutModal}>
        <Avatar imageUrl={user.avatar}/>
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
            Hoje é dia de vitória!
        </Text>
      </View>

    </View>
  );
}
