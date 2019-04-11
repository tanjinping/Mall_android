import React, {Component} from 'react';
import {Text, Image, View, FlatList, ScrollView, StyleSheet} from 'react-native';
import {order} from "../utils/data";

class Order_view extends Component {
    render() {
        const {name, image, count, price} = this.props.item;
        const index = this.props.index;
        return (
            <View style={index ? styles.order_view_one : styles.order_view}>
                <Image source={{uri: image}} style={{height: 110, width: 110}}/>
                <View style={{marginTop: 15}}>
                    <Text>{name}</Text>
                    <Text>￥{price}</Text>
                </View>
                <View style={{justifyContent: 'space-around'}}>
                    <Text style={styles.order_menu}>评价</Text>
                    <Text>x{count}</Text>
                </View>
            </View>
        );
    }
}

class Order_one extends Component {
    render() {
        let rows = [];
        this.props.order.item && this.props.order.item.commodity.map((item, index) => {
                rows.push(
                    <Order_view item={item} index={index} key={index}/>
                )
            }
        )
        return (
            <View style={styles.order_one}>
                {rows}
            </View>
        );
    }
}

class Order extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#f1f1f1'}}>
                <FlatList
                    data={order}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={(item) => <Order_one order={item}/>
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    order_view_one: {
        backgroundColor: '#fff',
        height: 110,
        width: '94%',
        marginLeft: '3%',
        borderTopWidth: 2,
        borderTopColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    order_view: {
        backgroundColor: '#fff',
        height: 110,
        width: '94%',
        marginLeft: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    order_one: {
        marginTop: 10
    },
    order_menu: {
        backgroundColor: 'yellow',
        height: 25,
        width: 50,
        lineHeight: 25,
        textAlign: 'center'
    }
})

export default Order;
