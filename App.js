import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import SearchInput from './src/components/SearchInput';
import Card from './src/components/Card';
import Loading from './src/components/Loading';
import getImageToWeather from './src/api/getImageToWeather';
const API_KEY = '587b22a179e686349ea45a1e89040e3e';

const App = () => {
  const [weatherDetail, setWeatherDetail] = useState({});
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log('got here');
    fetchData('Hanoi');
    console.log(weather);
    console.log(weather.main);
  }, []);
  useEffect(() => {
    console.log(weather);
    console.log(weather.main);
  }, [weather]);
  const fetchData = async cityInput => {
    setIsLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;
    const result = await fetch(url);
    const data = await result.json();
    setWeatherDetail(data);
    const {
      name: city,
      sys: {country},
      weather: [{description, icon, main: mainWeather}],
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
      icon,
      main: mainWeather.toLowerCase(),
    });
    setIsLoading(false);
  };
  return (
    <ImageBackground
      source={getImageToWeather(weather.main)}
      style={{width: '100%', height: '100%', resizeMode: 'repeat'}}>
      <View style={styles.container}>
        <SearchInput fetchData={fetchData} />
        {isLoading && <Loading />}
        {!isLoading && <Card weather={weather} />}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
