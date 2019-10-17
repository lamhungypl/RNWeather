import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
const Card = props => {
  const {
    city,
    country,
    description,
    temperature,
    humidity,
    windSpeed,
    icon,
  } = props.weather;
  const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardView}>
        <View style={styles.viewTop}>
          <Text style={styles.textTop}>
            City: {city},{country}
            {'\n'}
            {description}
          </Text>
        </View>
        <View style={styles.viewMiddle}>
          <Text style={styles.textMiddle}>{temperature}°C</Text>
          <Image style={styles.imgWeather} source={{uri: imgUrl}} />
        </View>
        <View style={styles.viewBot}>
          <Text style={styles.textBot}>
            Humidity percent: {humidity}
            {'\n'}
            Wind peed: {windSpeed}kmph
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
const styles = StyleSheet.create({
  cardContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardView: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    width: 350,
    height: 450,
    justifyContent: 'space-between',
  },
  viewTop: {
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 20,
  },
  viewMiddle: {
    alignItems: 'center',
  },
  viewBot: {
    alignItems: 'flex-end',
    marginTop: 40,
    padding: 20,
  },
  imgWeather: {
    width: 100,
    height: 100,
  },
  textTop: {
    fontSize: 20,
    textAlign: 'left',
  },
  textMiddle: {
    fontSize: 50,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  textBot: {
    textAlign: 'right',
    fontSize: 18,
  },
});
