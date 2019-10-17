import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SearchInput from './src/components/SearchInput';
import Card from './src/components/Card';

const API_KEY = '587b22a179e686349ea45a1e89040e3e';

const App = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData('Hanoi');
  }, []);
  useEffect(() => {
    console.log(weather);
  }, [weather]);
  const fetchData = async cityInput => {
    setIsLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;
    const result = await fetch(url);
    const data = await result.json();
    const {
      name: city,
      sys: {country},
      weather: [{description}],
      main: {temp: temperature, humidity},
      wind: {speed: windSpeed},
    } = data;
    setWeather({
      city,
      country,
      description,
      temperature,
      humidity,
      windSpeed,
    });
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <SearchInput fetchData={fetchData} />
      <Card weather={weather} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eadea6',
  },
});

export default App;
