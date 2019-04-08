import React from 'react';
import {Image} from 'react-native';
import {AppRegistry} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {name as appName} from './app.json';
import Home from "./component/Home";
import Order from "./component/Order";
import Car from "./component/Car";
import User from "./component/User";

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '商城首页',
                tabBarIcon: ({focused}) =>
                    focused ? <Image source={require('./image/home-sel.png')} style={{height: 25, width: 25}}/> :
                        <Image source={require('./image/home.png')} style={{height: 25, width: 25}}/>
            }
        },
        Order: {
            screen: Order,
            navigationOptions: {
                tabBarLabel: '订单',
                tabBarIcon: ({focused}) =>
                    focused ? <Image source={require('./image/order-sel.png')} style={{height: 25, width: 25}}/> :
                        <Image source={require('./image/order.png')} style={{height: 25, width: 25}}/>
            }
        },
        Car: {
            screen: Car,
            navigationOptions:
                {
                    tabBarLabel: '购物车',
                    tabBarIcon:
                        ({focused}) =>
                            focused ? <Image source={require('./image/trolley-sel.png')} style={{height: 25, width: 25}}/> :
                                <Image source={require('./image/trolley.png')} style={{height: 25, width: 25}}/>
                }
        }
        ,
        User: {
            screen: User,
            navigationOptions:
                {
                    tabBarLabel: '个人中心',
                    tabBarIcon: ({focused}) =>
                        focused ? <Image source={require('./image/user-sel.png')} style={{height: 25, width: 25}}/> :
                            <Image source={require('./image/user.png')} style={{height: 25, width: 25}}/>

                }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#FFD700',
            style: {
                height: 50
            }
        }
    }
)

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));