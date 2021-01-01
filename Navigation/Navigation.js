import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SceneAndCharacterSelection from '../Components/SceneAndCharacterSelection'
import SceneDetail from '../Components/SceneDetail'

const SceneAndCharacterSelectionStackNavigator = createStackNavigator({
    SceneAndCharacterSelection: {
        screen: SceneAndCharacterSelection,
        navigationOptions: {
            title: 'Choisir une scène et un personnage'
        }
    },
    SceneDetail: { 
        screen: SceneDetail
    }

})

export default createAppContainer(SceneAndCharacterSelectionStackNavigator)