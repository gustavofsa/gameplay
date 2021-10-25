import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type ListDividerProps = {
  isCentered?: boolean;
}

export function ListDivider({ isCentered = false }: ListDividerProps) {
  return (
    <View style={[
        styles.container,
        isCentered ? {
          marginVertical: 12,
        } : {
          marginTop: 2,
          marginBottom: 31,
          alignSelf: 'flex-end',
        }
      ]}
    />
  )
}
