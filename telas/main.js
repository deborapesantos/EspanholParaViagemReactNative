import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import Style from './Theme/Style';
import CategorysProcess from '../App/Process/CategorysProcess';

const CategorysInstance = new CategorysProcess();

export default class Main extends React.Component {

      static navigationOptions = {
        title: 'Categorias',
        headerStyle: {
          backgroundColor: '#F99B81',
        },
        headerTintColor: '#fff',
      };
    
    constructor(props){
        super(props);
        this.state= {
          list: CategorysInstance.getCategorys()
        }
           
    }

    componentDidMount() {
      this.state= {
        list: CategorysInstance.getCategorys()
    }
}

  _onPress(page){
    this.props.navigation.navigate(page)
  }
     
    render() {
      
        return (
            <Container style={Style.bgMain} backgroundColor="#fff">
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                    <View>
                    <ScrollView style={{width: '100%'}} >
                      {Object(this.state.list).map(i => 
                          <TouchableOpacity onPress={ () =>  this._onPress(i.page)} >
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