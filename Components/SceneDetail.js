import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Button from './Button'
import textDict from '../Helpers/textDict'

class SceneDetail extends React.Component {

  constructor(props) {
    super(props)
    const params = this.props.navigation.state.params
    const initCount = 0
    if (params.optionTextDisplay == "Masquer mes répliques" && textDict[params.scene]["scene"][0]["character"] == params.character) {
      var displayedLine = null
    } else {
      var displayedLine = textDict[params.scene]["scene"][0]["dialogue"]
    }
    this.state = {
      params: this.props.navigation.state.params,
      count: initCount,
      speakingCharacter: textDict[params.scene]["scene"][0]["character"],
      line: textDict[params.scene]["scene"][0]["dialogue"],
      nextButtonTitle: "Suivant",
      previousButtonTitle: "Retour au menu",
      displayedLine: displayedLine
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
            <Text style={styles.line}>{this.state.displayedLine}</Text>
          </View>
          <View style={styles.lateral_band} />
          <View style={styles.buttons_line}>
            <View style={styles.button_container}>
              <Button title={this.state.previousButtonTitle} disabled={false} onPress={() => {this.previousLine()}} />
            </View>
            <View style={styles.lateral_band}></View>
            <View style={styles.button_container}>
              <Button title={this.state.nextButtonTitle} disabled={false} onPress={() => {this.nextLine()}} />
            </View>
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

  previousLine() {
    var nextCount = this.state.count - 1
    if (nextCount >= 0) {
      if (nextCount == 0) {
        var newButtonTitle = "Retour au menu"
      } else {
        var newButtonTitle = "Précédent"
      }
      this.setState({
        count: nextCount,
        speakingCharacter: textDict[this.state.params.scene]["scene"][nextCount]["character"],
        line: textDict[this.state.params.scene]["scene"][nextCount]["dialogue"],
        previousButtonTitle: newButtonTitle,
        nextButtonTitle: "Suivant"
      })
      this.displayLine(nextCount)
    } else {
      this.backToMainMenu()
    }
  }

  nextLine() {
    var nextCount = this.state.count + 1
    if (nextCount < textDict[this.state.params.scene]["scene"].length) {
      if (nextCount == textDict[this.state.params.scene]["scene"].length - 1) {
        var newButtonTitle = "Retour au menu"
      } else {
        var newButtonTitle = "Suivant"
      }
      this.setState({
        count: nextCount,
        speakingCharacter: textDict[this.state.params.scene]["scene"][nextCount]["character"],
        line: textDict[this.state.params.scene]["scene"][nextCount]["dialogue"],
        nextButtonTitle: newButtonTitle,
        previousButtonTitle: "Précédent"
      })
      this.displayLine(nextCount)
    } else {
      this.backToMainMenu()
    }
  }

  displayLine(nextCount) {
    if (this.state.params.optionTextDisplay == "Masquer mes répliques" && textDict[this.state.params.scene]["scene"][nextCount]["character"] == this.state.params.character) {
      this.setState({
        displayedLine: null
      })
    } else {
      this.setState({
        displayedLine: textDict[this.state.params.scene]["scene"][nextCount]["dialogue"]
      })
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
  buttons_line: {
    flex: 1,
    flexDirection: 'row'
  },
  button_container: {
    flex: 6
  }
})

export default SceneDetail