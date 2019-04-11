import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {width} from "../utils/helps";

class Commodity extends Component {
    render() {
        const {image, price, name, source, _id} = this.props.navigation.state.params.commodity.item;
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{
                    width: '98%',
                    justifyContent: 'space-around',
                    elevation: 4,
                    height: width * 98 / 100,
                    marginLeft: '1%',
                    backgroundColor: '#fff'
                }}>
                    <Image source={{uri: image}} style={{width: '50%', height: width * 98 / 100 * 50 / 100}}/>
                    <View>
                        <Text>{name}</Text>
                        <Text>{source}</Text>
                    </View>
                    <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{
                            height: 25,
                            width: 25,
                            backgroundColor: 'yellow',
                            borderRadius: 50,
                            lineHeight: 25,
                            textAlign: 'center'
                        }}>
                            ￥
                        </Text>
                        <Text>
                            {price}
                        </Text>
                    </View>
                </View>
                <View style={{height: 50, marginTop: 10, marginBottom: 10, justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../image/check-yellow.png')} style={{width: 22, height: 16}}/>
                        <Text>7天免费退货</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../image/check-yellow.png')} style={{width: 22, height: 16}}/>
                        <Text>24小时内发货并配送运费险</Text>
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>已买评价</Text>
                    <Text>2条></Text>
                </View>
                <View style={styles.bottom_menu}>
                    <TouchableOpacity>
                        <Text style={styles.menu_add}>加入购物车</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menu_buy}>立即购买</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottom_menu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'yellow',
        flexDirection: 'row'
    },
    menu_add: {
        width: width * 50 / 100,
        height: 50,
        backgroundColor: '#f7eb9f',
        lineHeight: 50,
        textAlign: 'center'
    },
    menu_buy: {
        height: 50,
        width: width * 50 / 100,
        backgroundColor: '#f6e15f',
        lineHeight: 50,
        textAlign: 'center'
    }
})

export default Commodity;
