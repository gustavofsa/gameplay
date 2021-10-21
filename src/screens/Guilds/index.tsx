import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles'

type GuildsProps = {
  handleGuildSelect: (selectedGuild: Guild) => void
}

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {id: '1', name: 'Lendários', icon: 'image', owner: true},
    {id: '2', name: 'Los Ninjas', icon: 'image', owner: true},
    {id: '3', name: 'Jogatina', icon: 'image', owner: true}
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ListDivider}
        style={styles.guilds}
      />
    </View>
  )
}
