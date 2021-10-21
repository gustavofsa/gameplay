import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'
import { Avatar } from '../Avatar'

import { styles } from './styles'

type Member = {
  id: string,
  username: string,
  avatarUrl: string,
  status: string,
}

type MemberProps = {
  data: Member
}

export function Member({ data }: MemberProps) {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatarUrl} />

      <View>
        <Text style={styles.title}>
          { data.username }
        </Text>

        <View style={styles.status}>

          <View style={[
            styles.bulletStatus,
            {
              backgroundColor: isOnline ? on : primary
            }
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}
