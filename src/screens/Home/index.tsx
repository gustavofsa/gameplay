import React, { useState, useCallback } from "react";
import { FlatList, View} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_APPOINTMENTS } from "../../config/database";

import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import { Loading } from "../../components/Loading";
import { ModalSignOut } from "../../components/ModalSignOut";
import { useAuth } from "../../hooks/Auth";

export function Home() {
  const { signOut } = useAuth();
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const navigation = useNavigation();

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(selectedGuild: Appointment) {
    navigation.navigate('AppointmentDetails', { selectedGuild });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleOpenSignOutModal() {
    setOpenSignOutModal(true);
  }

  function handleCloseSignOutModal() {
    setOpenSignOutModal(false);
  }

  async function handleSignOut() {
    await signOut();
    setOpenSignOutModal(false);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storedAppointments: Appointment[] = response ? JSON.parse(response) : [];

    if(category) {
      setAppointments(storedAppointments.filter(item => item.category === category));
    } else {
      setAppointments(storedAppointments);
    }

    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <>
      <View style={styles.header}>
        <Profile  openSignOutModal={handleOpenSignOutModal} />
        <ButtonAdd
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      {
        isLoading ? <Loading /> :
        <>
          <ListHeader
            title={'Partidas agendadas'}
            subtitle={`Total: ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={(item, index) => {return `${item.id}${index}`}}
            renderItem={({item}) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.appointments}
            contentContainerStyle={{ paddingBottom: 69 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      }

      <ModalSignOut
        visible={openSignOutModal}
        singOut={handleSignOut}
        closeModal={handleCloseSignOutModal}
        onRequestClose={handleCloseSignOutModal}
      />

    </>
  );
}
