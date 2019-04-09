import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {width} from "../utils/helps";

class Banner extends Component {
    render() {
        return (
            <View style={styles.banner}>
                <Image source={require('../image/head.png')}
                       style={{height: 30, width: 30, marginLeft: 20, marginRight: 20}}/>
                <Text>用户名</Text>
            </View>
        );
    }
}

class User extends Component {
    render() {
        return (
            <View>
                <Image source={require('../image/bg.png')} style={styles.bg_top}/>
                <Banner/>
                <View style={styles.div}>
                    <Text>收货地址</Text>
                    <Text>></Text>
                </View>
                <View style={styles.hr}/>
                <View style={styles.div}>
                    <Text>联系客服</Text>
                    <Text>></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bg_top: {
        height: width / 750 * 254,
        width: '100%'
    },
    banner: {
        height: 100,
        width: '90%',
        top: -(width / 750 * 254 / 2),
        left: '5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row'
    },
    hr: {
        borderWidth: 0.3,
        borderColor: 'gray',
        width: '90%',
        left: '5%',
    },
    div: {
        height: 60,
        width: '90%',
        left: '5%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
})

export default User;
