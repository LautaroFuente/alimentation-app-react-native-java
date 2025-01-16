import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Food from '../interfaces/Food.interface';


interface ListFoodsProps {
  foods: Food[];  
}

const ListFoods: React.FC<ListFoodsProps> = ({ foods }) => {
  // Renderizamos cada alimento con su nombre y su imagen
  const renderItem = ({ item }: { item: Food }) => (
    <View style={styles.foodItem}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={foods}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

// Estilos para la lista
const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Redondeamos la imagen
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListFoods;
