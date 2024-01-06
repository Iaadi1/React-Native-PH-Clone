import React, {Component, useState} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    id: 1,
    title: 'Find the Pizza Hut closest to your home',
    description:
      'With our app, all Pizza Huts in India are in the palm of your hand and in the comfort of your home.',
    image: require('..//..//assets/images/onbrd_img_1.png'),
  },
  {
    id: 2,
    title: 'Take advantage of promotions and choose your order',
    description:
      'Several exclusive coupons and promotions on our app, every week for you!',
    image: require('..//..//assets/images/onbrd_img_2.png'),
  },
  {
    id: 3,
    title: 'Receive your pizza hot at home!',
    description:
      'Enjoy a delicious dinner with your friends, family and enjoy your night!',
    image: require('..//..//assets/images/onbrd_img_3.png'),
  },
];

export default function UIOnboarding({navigation}) {
  const [showHomePage, setShowHomePage] = useState(true);

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <View>
            <Image source={item.image} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      }}
      activeDotStyle={{backgroundColor: 'black', width: 30}}
        onDone={()=>{navigation.navigate("Home")}}
      showSkipButton
    />
  );
}
