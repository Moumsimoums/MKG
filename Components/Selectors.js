import { View } from 'react-native'
import React from 'react'
import Select from './Select'
import Button from './Button'
import textDict from '../Helpers/textDict'


class Selectors extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            scenes: Object.keys(textDict),
            characters: [],
            clickableButton: true,
            selectedScene: null,
            selectedCharacter: null
        }
    }

    render() {
        return (
            <View style={{ flex: 6, backgroundColor: '#3472FF' }}>
                <View style={{ flex: 2, backgroundColor: '#3472FF' }}></View>
                <View style={{ flex: 1, backgroundColor: '#3472FF' }}>
                    <Select value={this.state.selectedScene} options={this.state.scenes} placeholder="Choisis une scène" id="sceneSelect" onChange={value => {this.onSceneChange(value)}}/>
                </View>
                <View style={{ flex: 2, backgroundColor: '#3472FF' }}></View>
                <View style={{ flex: 1, backgroundColor: '#3472FF' }}>
                    <Select value={this.state.selectedCharacter} options={this.state.characters} placeholder="Choisis un personnage" id="characterSelect" onChange={value => {this.onCharacterChange(value)}}/>
                </View>
                <View style={{ flex: 2, backgroundColor: '#3472FF' }}></View>
                <View style={{ flex: 1, backgroundColor: '#3472FF' }}>
                    <Button title="C'est parti" disabled={this.state.clickableButton} scene={this.state.selectedScene} character={this.state.selectedCharacter} onPress={(scene, character) => {this.displayDetailForScene(scene, character)}}/>
                </View>
                <View style={{ flex: 5, backgroundColor: '#3472FF' }}></View>
            </View>
        )
    }

    onSceneChange(value) {
        this.setState({
            selectedScene: value,
            characters: textDict[value]["characters"],
            selectedCharacter: null,
            clickableButton: true
        })
    }

    onCharacterChange(value) {
        let newClickableButton = value == null
        this.setState({
            selectedCharacter: value,
            clickableButton: newClickableButton
        })
    }

    displayDetailForScene(scene, character) {
        this.props.onPress(scene, character)
    }
}

export default Selectors
