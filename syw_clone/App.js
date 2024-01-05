import React from 'react';
import { View, StatusBar, StyleSheet, Text, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
      translucent
      networkActivityIndicatorVisible={false}
      />
      <View style={styles.content}>
        <Text>Your content goes here</Text>
        <Button title="dont Click"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
