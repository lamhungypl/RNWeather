const images = {
  'clear sky': require('../../assets/clear-sky.jpg'),
  clear: require('../../assets/clear-sky.jpg'),
  'few clouds': require('../../assets/few-clouds.jpg'),
  clouds: require('../../assets/broken-clouds.jpeg'),
  'scattered clouds': require('../../assets/scattered-clouds.jpg'),
  'broken clouds': require('../../assets/broken-clouds.jpeg'),
  'shower rain': require('../../assets/rain.jpg'),
  rain: require('../../assets/rain.jpg'),
  thunderstorm: require('../../assets/thunderstorm.jpg'),
  snow: require('../../assets/snow.jpg'),
  mist: require('../../assets/mist.jpg'),
};
export default weather => images[weather];
