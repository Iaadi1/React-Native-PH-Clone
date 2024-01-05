import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UIButton from './components/UIButton'

export class App extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center'}}>
      {/* <UIButton onPress={()=>console.log("Pressed")} title="Enter"/> */}
      </View>
    )
  }
}

export default App