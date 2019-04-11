import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {commodity} from '../utils/data';
import {width} from "../utils/helps";

class Banner extends Component {
    render() {
        const {name, image} = commodity[0];
        return (
            <View style={styles.banner}>
                <View style={styles.banner_title}>
                    <Image source={require('../image/line-red.png')} style={styles.banner_line}/>
                    <Text>{name}</Text>
                    <Image source={require('../image/line-red.png')} style={styles.banner_line}/>
                </View>
                <Image source={{uri: image}} style={styles.banner_commodity}/>
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

class CommodityList extends Component {
    render() {
        const {image, name, price} = this.props.commodity.item;
        const commodity = this.props.commodity;
        return (
            <View style={styles.one}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Commodity', {commodity})
                }}>
                    <Image source={{uri: image}} style={{height: width * 42 / 100, width: width * 42 / 100}}/>
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: 18}}>{name}</Text>
                    <View style={styles.one_bottom}>
                        <Text style={styles.commodity_money}>￥</Text>
                        <Text style={{fontSize: 15}}>{price}</Text>
                        <Text style={styles.commodity_add}>+</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#f1f1f1'}}>
                <Image source={require('../image/bg.png')} style={styles.bg_top}/>
                <Banner/>
                <Title/>
                <FlatList
                    data={commodity}
                    numColumns={2}
                    keyExtractor={(item) => item._id}
                    renderItem={(item) =>
                        <CommodityList commodity={item}
                                       navigation={this.props.navigation}
                        />
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
    one_bottom: {
        flexDirection: 'row',
    },
    one: {
        height: 200,
        width: '42%',
        backgroundColor: '#fff',
        margin: '4%',
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
    commodity_money: {
        fontSize: 15,
        height: 20,
        width: 20,
        backgroundColor: '#FFD700',
        borderRadius: 50,
        textAlign: 'center'
    },
    commodity_add: {
        fontSize: 15,
        height: 20,
        width: 20,
        backgroundColor: '#FFD700',
        borderRadius: 50,
        textAlign: 'center',
        marginLeft: 'auto'
    },
    banner_commodity: {
        height: 100,
        width: 100,
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
