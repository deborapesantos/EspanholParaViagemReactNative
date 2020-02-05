import React, {Component} from 'react';
import {createStackNavigator, createAppContainer,} from 'react-navigation';
import { Button, } from 'react-native';



import Main from './main';
import Phrases from './../App/Screen/Phrases/index';
import Words from './../App/Screen/Words/index';
import Pronunciation from './../App/Screen/Pronunciation/index';
import Verbs from './../App/Screen/Verbs/index';
import Airport from './../App/Screen/Airport/index';
import Food from './../App/Screen/Food/index';
import City from './../App/Screen/City/index';
import DaysOfWeek from './../App/Screen/DaysOfWeek/index';
import Hours from './../App/Screen/Hours/index';
import Greeting from './../App/Screen/Greeting/index';

const AppStackNavigator = createStackNavigator({
    Main: Main,
    Phrases: Phrases,
    Words: Words,
    Pronunciation: Pronunciation,
    Verbs: Verbs,
    Airport:Airport,
    Food: Food,
    City: City,
    DaysOfWeek:DaysOfWeek,
    Hours: Hours,
    Greeting: Greeting
});

const AppContainer = createAppContainer(AppStackNavigator);


export default class Rotas extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#F99B81',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      };
    render(){
        return <AppContainer />
        
    }
}


