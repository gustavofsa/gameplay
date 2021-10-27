import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';

import { styles } from './styles'

type GuildsProps = {
  handleGuildSelect: (selectedGuild: Guild) => void
}

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {
        isLoading ? <Loading /> :
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
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={<ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          style={styles.guilds}
        />
      }
    </View>
  )
}
