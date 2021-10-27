import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import {
  Alert,
  FlatList,
  ImageBackground,
  Text,
  View,
  Share,
} from 'react-native'
import * as Linking from 'expo-linking'

import { Header } from '../../components/Header'
import { ShareButton } from '../../components/ShareButton'

import { styles } from './styles'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Appointment } from '../../components/Appointment'
import { api } from '../../services/api'
import { Loading } from '../../components/Loading'

type RouteParams = {
  selectedGuild: Appointment;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: Member[];
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { selectedGuild } = route.params as RouteParams;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${selectedGuild.guild.id}/widget.json`);
      setWidget(response.data)

    } catch (error) {
      Alert.alert('Verifique as configurações do servidor. Será que o widget está habilitado?');

    } finally {
      setIsLoading(false);
    }
  }

  async function handleShareInvitation() {

    try {
      await Share.share({
        title: 'gameplay',
        message: `Junte-se a ${selectedGuild.guild.name}`,
        url: widget.instant_invite
      });
    } catch(error) {
      Alert.alert('Não foi possível compartilhar este servidor')
    }
  }

  const handleOpenGuild  = useCallback(async () => {
      const supported = await Linking.canOpenURL(widget.instant_invite);

      if (supported) {
        await Linking.openURL(widget.instant_invite);
      } else {
        Alert.alert(`Não foi possível abrir esta URL: ${widget.instant_invite}`);
      }
    }, [widget.instant_invite]);

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={selectedGuild.guild.owner && <ShareButton onPress={handleShareInvitation} />}
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            { selectedGuild.guild.name }
          </Text>

          <Text style={styles.subtitle}>
            { selectedGuild.description }
          </Text>
        </View>
      </ImageBackground>

      { isLoading ? <Loading /> :
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total: ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      {
        selectedGuild.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            title ="Entrar na partida"
            onPress={handleOpenGuild}
          />
        </View>
      }
    </View>
  )
}
