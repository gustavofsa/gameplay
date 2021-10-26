import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'

import { Header } from '../../components/Header'
import { ShareButton } from '../../components/ShareButton'

import { styles } from './styles'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetails() {
  const members = [
    {id: '1', username: 'Gustavo', avatarUrl: 'https://github.com/gustavofsa.png', status: 'online'},
    {id: '2', username: 'Rodrigo', avatarUrl: 'https://github.com/rodrigorgtic.png', status: 'offline'},
    {id: '3', username: 'Rodrigo', avatarUrl: 'https://github.com/rodrigorgtic.png', status: 'offline'},
    {id: '4', username: 'Rodrigo', avatarUrl: 'https://github.com/rodrigorgtic.png', status: 'offline'},
    {id: '5', username: 'Rodrigo', avatarUrl: 'https://github.com/rodrigorgtic.png', status: 'offline'},
  ]

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={<ShareButton />}
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner }
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon
          title ="Entrar na partida"
        />
      </View>
    </View>
  )
}
