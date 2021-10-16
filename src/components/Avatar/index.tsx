import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type AvatarProps = {
  imageUrl: string;
}

export default function Avatar({imageUrl}: AvatarProps) {
  const {secondary50, secondary70} = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
      <Image source={{uri: imageUrl}} style={styles.avatar}/>
    </LinearGradient>
  )
}
