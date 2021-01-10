import { View, StyleSheet } from 'react-native'
import React from 'react'
import Selectors from './Selectors'


class SceneAndCharacterSelection extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.secondary_container}></View>
          <Selectors onPress={(scene, character, optionTextDisplay) => {this.displayDetailForScene(scene, character, optionTextDisplay)}}/>
        <View style={styles.secondary_container}></View>
      </View>
    )
  }

  displayDetailForScene(scene, character, optionTextDisplay) {
    this.props.navigation.navigate("SceneDetail", {scene: scene, character: character, optionTextDisplay: optionTextDisplay})
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3472FF'
  },
  secondary_container: {
    flex: 1,
    backgroundColor: '#3472FF'
  }
})

export default SceneAndCharacterSelection
