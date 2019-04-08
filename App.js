import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation'

//stack导航
class BigCar extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'green', alignItems: 'center'}}>
                <Text>BigCar?????????</Text>
                <TouchableOpacity style={{backgroundColor: 'black', height: 30, width: 30}}
                                  onPress={() => this.props.navigation.navigate('SmallCar', {bbq: 'fuck?'})}>
                </TouchableOpacity>
            </View>
        );
    }
}

let a = 222

class SmallCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '121'
        }
    }

    static navigationOptions = (screenProps) => {
        console.log(screenProps)
        return {
            title: a + ''
        }
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'yellow', alignItems: 'center'}}>
                <Text>{this.props.navigation.state.params.bbq}</Text>
                <TouchableOpacity style={{backgroundColor: 'black', height: 30, width: 30}}
                                  onPress={() => {
                                      a++
                                  }}>
                </TouchableOpacity>
            </View>
        );
    }
}

//抽屉式导航

const Stack = createStackNavigator({
    BigCar: {
        screen: BigCar,
        navigationOptions: {
            title: 'BigCar'
        }
    },
    SmallCar: {
        screen: SmallCar,
    }
})

export default createAppContainer(Stack);
