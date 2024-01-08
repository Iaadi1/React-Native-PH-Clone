import React, {Component, useState} from 'react';
import {Text, View, Image, StatusBar, Button, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import UIButton from '../../components/UIButton';

const slides = [
  {
    id: 1,
    title: 'Find the Pizza Hut closest to your home',
    description:
      'With our app, all Pizza Huts in India are in the palm of your hand and in the comfort of your home.',
    image1: require('..//..//assets/images/pizza_hut_logo.png'),
    image2: require('..//..//assets/images/onbrd_img_1.png'),
  },
  {
    id: 2,
    title: 'Take advantage of promotions and choose your order',
    description:
      'Several exclusive coupons and promotions on our app, every week for you!',
    image1: require('..//..//assets/images/pizza_hut_logo.png'),
    image2: require('..//..//assets/images/onbrd_img_2.png'),
  },
  {
    id: 3,
    title: 'Receive your pizza hot at home!',
    description:
      'Enjoy a delicious dinner with your friends, family and enjoy your night!',
    image1: require('..//..//assets/images/pizza_hut_logo.png'),
    image2: require('..//..//assets/images/onbrd_img_3.png'),
  },
];

export default function UIOnboarding({navigation}) {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <View style={styles.mainContainer}>
            <Image style={{marginVertical: 50}} source={item.image1} />
            <Image
              style={{width: 300, height: 214, marginVertical: 40}}
              source={item.image2}
            />
            <Text
              style={{
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'capitalize',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: '#272425',
                fontSize: 18,
                fontWeight: 400,
                textAlign: 'center',
                width: 350,
                marginVertical: 20,
                lineHeight: 25,
              }}>
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{backgroundColor: '#C51333', width: 30}}
      showSkipButton
      renderSkipButton={()=>{
        return(
            <View style={{flex:1, alignItems:'center'}}>
                <UIButton title="Skip"/>
            </View>
        )
      }}
      renderDoneButton={() => {
        return (
          <View style={{flex:1, alignItems:'center'}}>
            <UIButton
              title="Continue"
              onPress={() => {
                navigation.navigate('LOGIN');
              }}
            />
          </View>
        );
      }}
      bottomButton={true}
      renderNextButton={() => null}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {},
});
