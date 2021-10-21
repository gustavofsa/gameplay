import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

export function ShareButton() {
  return (
    <BorderlessButton>
      <Fontisto
        name="share"
        size={24}
        color={theme.colors.primary}
      />
    </BorderlessButton>
  )
}
