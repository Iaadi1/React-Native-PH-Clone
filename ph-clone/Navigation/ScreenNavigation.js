import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Homepage from '../Screens/Homepage';
import LogIn from '../Screens/LogIn';
import UIOnboarding from '../Screens/Onboarding/UIOnboarding';
const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={UIOnboarding}
        />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen options={{headerShown:false}} name='LOGIN' component={LogIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ScreenNavigation;
