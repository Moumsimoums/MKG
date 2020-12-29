import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

class Select extends React.Component {
  state = {
    language: 'java',
  };
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: '#EE8700'
  }
});

export default Select