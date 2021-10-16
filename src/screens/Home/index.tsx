import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";

import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState('');

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
    }
  ];

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      <View style={styles.content}>
        <ListHeader
          title={'Partidas agendadas'}
          subtitle={'Total 6'}
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.appointments}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
