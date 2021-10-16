import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles';

type GuildIconProps = {

}

export function GuildIcon() {
  const uri = 'https://fashionsista.co/downloadpng/png/20200901/fortnite-icon-but-it-39-s-christmas-fortnite-battle-royale.jpg';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
