import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PresseScreen from '../screens/PresseScreen';
import RadioScreen from '../screens/RadioScreen';
import DetailScreen from '../screens/DetailScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});  

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused} name={ Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}`  : 'md-home'
      }
    />
  ),
};
HomeStack.path = '';


const DetailStack = createStackNavigator(
  {
   Detail: DetailScreen
  },
  config
);


const PresseStack = createStackNavigator(
  {
    Presse: PresseScreen,
  },
  config
);

PresseStack.navigationOptions = {
  tabBarLabel: 'Presse',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} />
  ),
};

PresseStack.path = '';

const RadioStack = createStackNavigator(
  {
    Radio: RadioScreen,
  },
  config
);

RadioStack.navigationOptions = {
  tabBarLabel: 'Radio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-radio' : 'md-radio'} />
  ),
};

RadioStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PresseStack,
  RadioStack,
});

tabNavigator.path = '';


const SocieteDetails  = createStackNavigator(
  {
    SocieteDetail: SocieteDetails
  }
);


export default tabNavigator;
