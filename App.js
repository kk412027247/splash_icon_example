import React, {Component} from 'react';
import {View,StyleSheet, Text, ImageBackground, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


type Props = {};
export default class App extends Component<Props> {



  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (

      <View
        source={require('./images/background.jpg')}
        style={styles.container}
      >
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <Text style={styles.text}>Hey ~</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f9e8f5'
  },
  text:{
    fontSize:60,
    fontWeight:'800',
    color:'#000'
  }
});
