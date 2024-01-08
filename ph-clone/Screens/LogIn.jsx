import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

const LogIn = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={{flex:1, alignItems:'center'}}>
        <Image source={require('..//assets/images/pizza_hut_logo.png')}/>
      </View>
    </SafeAreaView>
  );
};
export default LogIn;
