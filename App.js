import React, {Component} from 'react';
import {View,StyleSheet, Text, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { RNCamera } from 'react-native-camera';

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
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
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
  },
  camera:{
    width:100,
    height:100,
    marginBottom:100

  }
});
