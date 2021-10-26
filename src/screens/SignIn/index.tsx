import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/Auth";

export function SignIn() {
  const { user, isLoading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(`${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image}/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        {
          isLoading
          ? <ActivityIndicator color={theme.colors.primary}/>
          : <ButtonIcon
              title={'Entrar com Discord'}
              onPress={handleSignIn}
            />
        }
      </View>
    </View>
  );
}
