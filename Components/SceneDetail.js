import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Button from './Button'
import textDict from '../Helpers/textDict'

class SceneDetail extends React.Component {

  constructor(props) {
    super(props)
    const params = this.props.navigation.state.params
    this.state = {
      params: this.props.navigation.state.params,
      count: 0,
      speakingCharacter: textDict[params.scene]["scene"][0]["character"],
      line: textDict[params.scene]["scene"][0]["dialogue"],
      buttonTitle: "Prochaine réplique"
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.lateral_band} />
        <View style={styles.central_content}>
          <View style={styles.lateral_band} />
          <View style={styles.lateral_band}>
            <Text style={styles.title}>{this.state.speakingCharacter}</Text>
          </View>
          <View style={styles.lateral_band} />
          <View style={styles.lateral_band_line}>
            <Text style={styles.line}>{this.state.line}</Text>
          </View>
          <View style={styles.lateral_band} />
          <View style={styles.button_container}>
            <Button title={this.state.buttonTitle} disabled={false} onPress={() => {this.nextLine()}} />
          </View>
          <View style={styles.lateral_band} />
        </View>
        <View style={styles.lateral_band} />
      </View>
    )
  }

  backToMainMenu() {
    this.props.navigation.navigate("SceneAndCharacterSelection")
  }

  nextLine() {
    var nextCount = this.state.count + 1
    if (nextCount < textDict[this.state.params.scene]["scene"].length) {
      if (nextCount == textDict[this.state.params.scene]["scene"].length - 1) {
        var newButtonTitle = "Retour au choix de scène"
      } else {
        var newButtonTitle = "Prochaine réplique"
      }
      this.setState({
        count: nextCount,
        speakingCharacter: textDict[this.state.params.scene]["scene"][nextCount]["character"],
        line: textDict[this.state.params.scene]["scene"][nextCount]["dialogue"],
        buttonTitle: newButtonTitle
      })
    } else {
      this.backToMainMenu()
    }
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3472FF'
  },
  lateral_band: {
    flex: 1
  },
  lateral_band_line: {
    flex: 10
  },
  central_content: {
    flex: 6
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24
  },
  line: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  button_container: {
    flex: 1,

  }
})

export default SceneDetail