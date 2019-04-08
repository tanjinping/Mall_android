import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {commodity} from '../utils/data';
import {width} from "../utils/helps";

class Banner extends Component {
    render() {
        return (
            <View style={styles.banner}>
                <View style={styles.banner_title}>
                    <Image source={require('../image/line-red.png')} style={styles.banner_line}/>
                    <Text>春季推荐</Text>
                    <Image source={require('../image/line-red.png')} style={styles.banner_line}/>
                </View>
                <Image source={{uri: commodity[0].image}} style={styles.banner_commodity}/>
                <Image source={require('../image/discount.png')} style={styles.banner_price}/>
            </View>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Image source={require('../image/line-black.png')} style={styles.line}/>
                <Text>春季推荐</Text>
                <Image source={require('../image/line-black.png')} style={styles.line}/>
            </View>
        );
    }
}

class Commodity extends Component {
    render() {
        return (
            <View style={styles.one}>
                <View></View>
                <View>
                    <View></View>
                    <View>
                        <View></View>
                        <View></View>
                        <View></View>
                    </View>
                </View>
            </View>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Image source={require('../image/bg.png')} style={styles.bg_top}/>
                <Banner/>
                <Title/>
                <FlatList
                    style={styles.commodity}
                    data={commodity}
                    numColumns={2}
                    renderItem={(item) =>
                        <Commodity/>
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bg_top: {
        height: width / 750 * 254,
        width: '100%'
    },
    commodity: {
        // justifyContent: 'space-around'
    },
    one: {
        height: 200,
        width: '42%',
        backgroundColor: '#fff',
        margin: '4%'

    },
    banner_line: {
        height: 23.8,
        width: 14.7
    },
    banner_price: {
        width: 132.608,
        height: 96.256,
        position: 'absolute',
        bottom: 0,
        left: 15,
    },
    banner_commodity: {
        height: 100,
        width: 100,
        // position: 'absolute'
        alignSelf: 'flex-end',
        right: 15,
    },
    banner_title: {
        top: 15,
        left: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    banner: {
        height: 160,
        width: '90%',
        top: -(width / 750 * 254 / 2),
        left: '5%',
        backgroundColor: '#fff',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        height: 34,
        width: 21
    }
})

export default Home;
