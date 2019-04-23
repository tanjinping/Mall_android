import React from 'react';
import {Image} from 'react-native';
import {AppRegistry} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import {name as appName} from './app.json';
import Home from "./component/Home";
import Order from "./component/Order";
import Car from "./component/Car";
import Login from "./component/Login";
import User from "./component/User";
import Address from "./component/Address";
import Commodity from "./component/Commodity";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '商城首页',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons name={'ios-home'} size={26} style={{color: tintColor}}/>
                )
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
            scrollEnabled: true,
            tabStyle: {
                height: 50
            }
        }
    }
)

const StackNavigator = createStackNavigator({
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    Address: {
        screen: Address,
        NavigationOptions: {
            title: '我的地址',
            headerStyle: {},
            headerTitleStyle: {
                fontSize: 15
            },
            gesturesEnabled: true
        }
    },
    Commodity: {
        screen: Commodity,
        navigationOptions: {
            title: '商品详情',
            headerTitleStyle: {
                fontSize: 15
            },
            gesturesEnabled: true
        }
    }
})

const SwitchNavigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    StackNavigator: {
        screen: StackNavigator
    }
})

AppRegistry.registerComponent(appName, () => createAppContainer(SwitchNavigator));
