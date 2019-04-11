import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {width, height} from "../utils/helps";
import {car} from "../utils/data";

class Car_top extends Component {
    render() {
        return (
            <View style={styles.Car_top}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.select} onPress={this.props.all_select_click}>
                        <Image source={require('../image/check.png')}
                               style={{height: 10, width: 10, display: this.props.all_select ? 'flex' : 'none'}}/>
                    </TouchableOpacity>
                    <Text>全选</Text>
                </View>
                <TouchableOpacity onPress={this.props.edit}>
                    <Text>编辑</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Car_bottom extends Component {
    render() {
        return (
            <View style={styles.Car_bottom}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.select} onPress={this.props.all_select_click}>
                        <Image source={require('../image/check.png')}
                               style={{height: 10, width: 10, display: this.props.all_select ? 'flex' : 'none'}}/>
                    </TouchableOpacity>
                    <Text>全选</Text>
                </View>
                <Text>总价￥{this.props.price}</Text>
                <TouchableOpacity>
                    <Text style={styles.pay}>结算</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Car_one extends Component {
    render() {
        const {image, count, name, price} = this.props.commodity.item;
        const {index} = this.props.commodity;
        return (
            <View style={styles.car_one}>
                <TouchableOpacity style={styles.select} onPress={() => {
                    this.props.one_select_click(index)
                }}>
                    <Image source={require('../image/check.png')}
                           style={{height: 10, width: 10, display: this.props.num[index] ? 'flex' : 'none'}}/>
                </TouchableOpacity>
                <Image source={{uri: image}}
                       style={{height: 110, width: 110}}/>
                <View>
                    <Text>{name}</Text>
                    <Text>{price}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 30}}>
                    <TouchableOpacity
                        style={{display: this.props.edit ? 'flex' : 'none'}}
                        onPress={() => {
                            this.props.edit_click(index, -1)
                        }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity
                        style={{display: this.props.edit ? 'flex' : 'none'}}
                        onPress={() => {
                            this.props.edit_click(index, 1)
                        }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,//编辑开关选项
            price: 0,//总价
            all_select: false,//全选
            num: [],//单选数组
            car: []
        }
    }

    componentDidMount() {
        this.setState({
            car,
        })
        let num = this.state.num;
        car.forEach(() => num.push(false))
        this.setState({
            num
        })
        this.count();
    }

    componentWillUnmount() {
        car = this.state.car;
    }

    one_select_click(index) {
        let num = this.state.num;
        num[index] = !num[index];
        let value = num.filter((item) =>
            item === false
        )
        console.log(value.length)
        this.setState({
            num,
            all_select: !value.length && !this.state.all_select
        })
        this.count();
    }

    //丢失精度解决方案
    accAdd(num1, num2) {
        let r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return Math.round(num1 * m + num2 * m) / m;
    }

    //计算价格
    count() {
        const num = this.state.num;
        let price = 0;
        car.forEach((item, index) => {
            if (num[index]) {
                price = this.accAdd(price, item.price * item.count);
            }
        })
        this.setState({
            price
        })
    }

    //是否全选
    all_select() {
        let num = this.state.num;
        num.forEach((el, index) => {
            this.state.all_select ?
                num[index] = false : num[index] = true
        })
        this.setState({
            all_select: !this.state.all_select,
            num
        })
        this.count();
    }

    //是否编辑购物车商品数量
    edit() {
        this.setState({
            edit: !this.state.edit
        })
    }

    edit_click(index, value) {
        let car = this.state.car;
        car[index].count += value;
        !car[index].count && car.splice(index, 1);
        this.setState({
            car
        })
    }

    render() {
        return (
            <View style={{width: width, height: height - 50, backgroundColor: '#f1f1f1'}}>
                <Car_top all_select={this.state.all_select}
                         edit={this.edit.bind(this)}
                         all_select_click={this.all_select.bind(this)}/>
                <FlatList
                    style={{marginBottom: 74}}
                    keyExtractor={(item, index) => index + ''}
                    data={car}
                    renderItem={(item) => <Car_one
                        edit={this.state.edit}
                        num={this.state.num}
                        edit_click={this.edit_click.bind(this)}
                        one_select_click={this.one_select_click.bind(this)}
                        commodity={item}/>}
                />
                <Car_bottom all_select={this.state.all_select}
                            all_select_click={this.all_select.bind(this)}
                            price={this.state.price}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Car_top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        height: 50
    },
    pay: {
        backgroundColor: 'yellow',
        height: 50,
        width: width * 90 / 100 * 33.33 / 100,
        lineHeight: 50,
        textAlign: 'center',
    },
    Car_bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        height: 50,
        position: 'absolute',
        bottom: 24,
    },
    car_one: {
        width: '90%',
        marginLeft: '5%',
        height: 110,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    select: {
        marginRight: 10,
        height: 20,
        width: 20,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Car;
