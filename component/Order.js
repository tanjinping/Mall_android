import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
    SwipeableFlatList
} from 'react-native';
import {commodity, order} from "../utils/data";

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
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            nums: order
        }
    }

    loadData(value) {
        value && this.setState({isLoading: true});
        if (value) {
            setTimeout(() => {
                this.setState({
                    nums: this.state.nums.reverse(),
                    isLoading: false
                })
            }, 2000)
        } else {
            setTimeout(() => {
                this.setState({
                    nums: this.state.nums.concat(order),
                })
            }, 2000)
        }
    }

    render() {
        return (
            <SwipeableFlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this.loadData.bind(this, true)}
                    />
                }
                ListFooterComponent={() =>
                    <View>
                        <ActivityIndicator
                            size={'large'}
                            animating={true}
                        />
                        <Text style={{textAlign: 'center'}}>正在加载更多内容</Text>
                    </View>
                }
                onEndReached={this.loadData.bind(this, false)}
                renderQuickActions={() =>
                    <View style={styles.delete}>
                        <TouchableOpacity onPress={()=>alert('确定删除？')}>
                            <Text>删除</Text>
                        </TouchableOpacity>
                    </View>}
                maxSwipeDistance={100}
                style={{backgroundColor: '#f1f1f1'}}
                data={this.state.nums}
                keyExtractor={(item, index) => index + ''}
                renderItem={(item) => <Order_one order={item}/>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    delete: {
        height: '90%',
        width: '90%',
        backgroundColor: 'red',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: '3%',
        left: '10%'
    },
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
