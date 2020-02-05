import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import Style from '../../../telas/Theme/Style';
import ListsProcess from '../../Process/ListsProcess';

const ListsProcessInstance = new ListsProcess();

export default class Greeting extends React.Component {

    static navigationOptions = {
        title: 'Saludos',
        headerStyle: {
          backgroundColor: '#F99B81',
        },
        headerTintColor: '#fff',
      };
    
    
    constructor(props){
        super(props);
        this.state ={ isLoading: true}  
    }

    componentDidMount() {
 
      ListsProcessInstance.getGreeting()
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
            isLoading: false,
            list: Object(responseJson),
        })
      })
      .catch((error) => {
        console.error(error);
    });

    }

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
               <Text style={[{textAlign:'center',textAlignVertical:'center'}]}>Carregando...</Text>
              </View>
            )
          }
        return (
            <Container style={Style.bgMain} backgroundColor="#fff">
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                    <View>

                    <ScrollView style={{width: '100%'}} >
                      {this.state.list.map(i => 
                          <TouchableOpacity onPress={ () =>  {}} >
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                          <Text>{i.spanish}</Text>
                          <Text style={[{color:'red'}]}>{i.tradution}</Text>
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