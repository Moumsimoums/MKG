import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'


class Select extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  handleOnChange(value) {
    this.state.value = value
    this.props.onChange(value)
  }

  render() {
    const params = this.props
    return (
      <View style={style.selectContainer}>
        <CustomPicker
          value={params.value}
          options={params.options}
          placeholder={params.placeholder}
          modalAnimationType='fade'
          onValueChange={value => {
            this.handleOnChange(value)
          }}
        />
      </View>
    )
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

  selectContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE8700',
    borderRadius: 25
  },
})

export default Select