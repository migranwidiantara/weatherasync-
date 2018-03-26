import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const cityicon = require('./img/city.png');
const mainicon = require('./img/main.png');
const descriptionicon = require('./img/description.png');
const tempicon = require('./img/temp.png');
const sunriseicon = require('./img/sunrise.png');
const sunseticon = require('./img/sunset.png');
const pressureicon = require('./img/pressure.png');
const humidityicon = require('./img/humidity.png');
const sea_levelicon = require('./img/sea_level.png');
const grnd_levelicon = require('./img/grnd_level.png');
const speedicon = require('./img/speed.png');

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
  async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=987df1d1b2101ad5c37a3d52a028b201&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.boxInput}>

          <Text style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15, color: 'white', fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput
              style={{ height: 40, width: 150, backgroundColor: 'white', color: 'black', borderColor: 'black', borderWidth: 1, padding: 9}}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />

            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="black"

              accessibilityLabel="Klik untuk melihat cuaca"
            />

      </View>

      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={cityicon} style={styles.icon} />
       </View>
          <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={tempicon} style={styles.icon} />
       </View>
          <Text> Temp : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainicon} style={styles.icon} />
       </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={descriptionicon} style={styles.icon} />
       </View>
          <Text> Desc : { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunriseicon} style={styles.icon} />
       </View>
          <Text> Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunseticon} style={styles.icon} />
       </View>
          <Text> Sunset : { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={pressureicon} style={styles.icon} />
       </View>
          <Text> Pressure : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={humidityicon} style={styles.icon} />
       </View>
          <Text> Humidity : { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sea_levelicon} style={styles.icon} />
       </View>
          <Text> Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={grnd_levelicon} style={styles.icon} />
       </View>
          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>
      </View>
      <View style={styles.boxOutput}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={speedicon} style={styles.icon} />
       </View>
          <Text> Wind Speed : { this.state.forecast.speed} </Text>
        </View>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    marginTop: 10,
    backgroundColor: '#00ACC1',
    flex: 1,
    flexDirection: 'column'
  },
  boxInput: {
    flex: 0.4,
    backgroundColor: '#00ACC1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxOutput: {
    flex: 0.3,
    backgroundColor: '#B2EBF2',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 220,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    height: 45,
    width: 45,
  }
});
