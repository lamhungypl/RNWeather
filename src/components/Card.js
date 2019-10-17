import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
const Card = props => {
  const {
    city,
    country,
    description,
    temperature,
    humidity,
    windSpeed,
  } = props.weather;
  return (
    <View style={styles.cardContainer}>
      <Text>
        city: {city},{country}
      </Text>
      <Text>{description}</Text>
      <Text>temp: {temperature}</Text>
      <Text>humidity percent: {humidity}</Text>
      <Text>wind peed: {windSpeed}kmph</Text>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
});
