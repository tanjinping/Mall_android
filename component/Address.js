import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {address} from "../utils/data";

class Address_one extends Component {
    render() {
        const {address, number, name} = this.props.address.item;
        return (
            <View style={styles.address_one}>
                <Text>{address}</Text>
                <Text>{name}</Text>
                <Text>{number}</Text>
            </View>
        );
    }
}

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            number: null,
            name: null
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f1f1f1'}}>
                <View style={{display: this.state.add ? 'flex' : 'none'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>收货地址：</Text>
                        <TouchableOpacity>
                            <Text style={{height: 20, backgroundColor: 'green'}}>选择收货地址</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>电话号码：</Text>
                        <TextInput
                            placeholder="请输入电话号码"
                            onChangeText={(number) => this.setState({number})}
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>姓名：</Text>
                        <TextInput
                            placeholder="请输入姓名"
                            onChangeText={(name) => this.setState({name})}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity>
                            <Text style={{height: 20, width: 30, backgroundColor: 'green'}}
                                  onPress={() => {
                                      this.setState({
                                          add: false
                                      })
                                  }}
                            >添加</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{height: 20, width: 30, backgroundColor: 'green'}}
                                  onPress={() => {
                                      this.setState({
                                          add: false
                                      })
                                  }}
                            >取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{display: this.state.add ? 'none' : 'flex'}}
                                  onPress={() => {
                                      this.setState({
                                          add: true
                                      })
                                  }}
                >
                    <Text style={styles.add_menu}>点击添加地址</Text>
                </TouchableOpacity>
                < FlatList
                    data={address}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={(item) =>
                        <Address_one
                            address={item}
                        />}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    address_one: {
        backgroundColor: '#fff',
        height: 70,
        justifyContent: 'space-between',
        marginTop: 10
    },
    add_menu: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 50,
        lineHeight: 50,
        textAlign: 'center'
    }
})

export default Address;
