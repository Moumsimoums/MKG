import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';



class Select extends React.Component {
  state = {
    language: 'java',
  };
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={styles.main_container}
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
  main_container: {
    flex: 1
  }
})

export default Select