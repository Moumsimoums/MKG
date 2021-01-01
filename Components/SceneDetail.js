import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class SceneDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail de la scène</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default SceneDetail