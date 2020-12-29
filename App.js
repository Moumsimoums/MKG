import { View } from 'react-native'
import React from 'react'
import Selectors from './Components/Selectors'


export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#3472FF' }}>
        <View style={{ flex: 1, backgroundColor: '#3472FF' }}></View>
          <Selectors />
        <View style={{ flex: 1, backgroundColor: '#3472FF' }}></View>
      </View>
    )
  }
}
