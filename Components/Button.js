import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

class Button extends React.Component {

  render() {
    const params = this.props
    return (
      <TouchableOpacity style={style.button} disabled={params.disabled} onPress={() => {this.handleOnPress(params.scene, params.character)}}>
        <View style={style.buttonLabelContainer}>
          <Text style={style.buttonLabel}>
            {params.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleOnPress(scene, character) {
    this.props.onPress(scene, character)
  }
}


const style = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#EE8700'
  },

  buttonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  buttonLabelContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Button