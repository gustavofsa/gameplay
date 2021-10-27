import React from 'react'
import { Modal, ModalProps, View, Text, Pressable, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'

import { styles } from './styles'

type ModalSignOutProps = ModalProps & {
  singOut: () => Promise<void>
  closeModal: () => void
}

export function ModalSignOut({singOut, closeModal, ...rest }: ModalSignOutProps) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
                <Text style={styles.title}>
                  Deseja sair do Game<Text style={styles.highlight}>Play</Text>?
                </Text>

                <View style={styles.buttonWrapper}>
                  <View style={styles.buttonBorder}>
                    <Pressable
                      style={styles.cancelButton}
                      onPress={() => {closeModal()}}
                      >
                      <Text style={styles.buttonText}>Não</Text>
                    </Pressable>
                  </View>

                  <Pressable
                    style={styles.signOutButton}
                    onPress={() => {singOut()}}
                  >
                    <Text style={styles.buttonText}>Sim</Text>
                  </Pressable>
                </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
