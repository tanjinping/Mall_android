import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StackNavigator')}>
                    <Text>登陆</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
