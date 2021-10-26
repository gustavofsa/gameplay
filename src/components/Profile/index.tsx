import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  const { user } = useAuth();

  return(
    <View style={styles.container}>

      <Avatar imageUrl={user.avatar}/>

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
