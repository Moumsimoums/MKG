import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeSelect } from '@material-ui/core';

class Select extends React.Component {
  render() {
    return (
      <NativeSelect>
        <option value="">None</option>
        <option value="abc">ABC</option>
      </NativeSelect>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Select