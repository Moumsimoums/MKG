import { View } from 'react-native'
import React from 'react'
import Select from './Components/Select'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#3472FF' }}>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}></View>
        <View style={{ flex: 6, backgroundColor: '#3472FF' }}>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}></View>
          <View style={{ flex: 1, backgroundColor: '#3472FF' }}></View>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}></View>
          <View style={{ flex: 1, backgroundColor: '#3472FF' }}></View>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}></View>
          <View style={{ flex: 1, backgroundColor: '#3472FF' }}></View>
          <View style={{ flex: 5, backgroundColor: '#FFFFFF' }}></View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}></View>
      </View>
    )
  }
}
