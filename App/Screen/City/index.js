import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import Style from '../../../telas/Theme/Style';
import ListsProcess from '../../Process/ListsProcess';

const ListsProcessInstance = new ListsProcess();

export default class City extends React.Component {

    static navigationOptions = {
        title: 'Usado en la ciudad',
        headerStyle: {
          backgroundColor: '#F99B81',
        },
        headerTintColor: '#fff',
      };
    
    
    constructor(props){
        super(props);

            this.state= {
                list: ListsProcessInstance.getCity()
            }
    }

    componentDidMount() {
        this.state= {
          list: ListsProcessInstance.getCity()
      }
    }

    render() {
        return (
            <Container style={Style.bgMain} backgroundColor="#fff">
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                    <View>

                    <ScrollView style={{width: '100%'}} >
                      {Object.keys(this.state.list).map(i => 
                          <TouchableOpacity onPress={ () =>  {}} >
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                          <Text>{this.state.list[i].spanish}</Text>
                          <Text style={[{color:'red'}]}>{this.state.list[i].tradution}</Text>
                          </View>
                          </TouchableOpacity>
                      )}
                      </ScrollView>
                    </View>
                </Content>
            
        </Container>
        );
    }
}