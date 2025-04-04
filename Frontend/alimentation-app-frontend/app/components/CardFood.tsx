import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Food from '../interfaces/Food.interface';


const CardFood: React.FC<{ food: Food }> = ({ food }) => {
  return (
    <ScrollView style={styles.cardContainer}>
      <Image
        source={{ uri: food.image_url || 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{food.name}</Text>
        <Text style={styles.brand}>{food.brand || 'Marca desconocida'}</Text>

        <View style={styles.nutritionContainer}>
          <Text style={styles.nutritionItem}>Calorías: {food.calories} kcal</Text>
          <Text style={styles.nutritionItem}>Proteínas: {food.protein} g</Text>
          <Text style={styles.nutritionItem}>Carbohidratos: {food.carbs} g</Text>
          <Text style={styles.nutritionItem}>Grasas: {food.fats} g</Text>
        </View>

        <Text style={styles.description}>{food.description || 'Descripción no disponible.'}</Text>
      </View>
    </ScrollView>
  );
};

// Estilos de la card
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brand: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  nutritionContainer: {
    marginBottom: 10,
  },
  nutritionItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
});

export default CardFood;
