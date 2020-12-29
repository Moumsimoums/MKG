import { View } from 'react-native'
import React from 'react'
import Select from './Select'
import Button from './Button'
import textData from '../Helpers/textData'


class Selectors extends React.Component {

    constructor(props) {
        super(props)
        let scenes = []
        textData.forEach(scene => {
            scenes.push(scene.id)
        });
        this.state = {
          scenes: scenes,
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
                    <Button title="C'est parti" disabled={this.state.clickableButton}/>
                </View>
                <View style={{ flex: 5, backgroundColor: '#3472FF' }}></View>
            </View>
        )
    }

    onSceneChange(value) {
        let newScene = null
        let newCharacters = []
        textData.forEach(scene => {
            if (scene.id == value) {
                newScene = value
                newCharacters = scene.characters
            }
        });
        this.setState({
            selectedScene: newScene,
            characters: newCharacters,
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
}

export default Selectors
