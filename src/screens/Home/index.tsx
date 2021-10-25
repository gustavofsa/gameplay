import React, { useState } from "react";
import { FlatList, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Los Ninjas',
        icon: null,
        owner: false,
      },
      category: '4',
      date: '22/10 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'A',
        icon: null,
        owner: false,
      },
      category: '4',
      date: '22/10 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'B',
        icon: null,
        owner: false,
      },
      category: '4',
      date: '22/10 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'C',
        icon: null,
        owner: false,
      },
      category: '4',
      date: '22/10 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'D',
        icon: null,
        owner: false,
      },
      category: '4',
      date: '22/10 às 20:40h',
      description: 'É hoje que vamos chegar no challenger sem perder uma da md10'
    }
  ];

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      <ListHeader
        title={'Partidas agendadas'}
        subtitle={'Total 6'}
      />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Appointment
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.appointments}
        contentContainerStyle={{ paddingBottom: 69 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
