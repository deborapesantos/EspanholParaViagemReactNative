import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import Style from '../../../telas/Theme/Style';
import ListsProcess from '../../Process/ListsProcess';

const ListsProcessInstance = new ListsProcess();

export default class Pronunciation extends React.Component {

    static navigationOptions = {
        title: 'pronunciación en español',
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
      ListsProcessInstance.getPronunciation()
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
          this.setState({
            isLoading: false,
            list: Object(responseJson).sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
              })
          })
     })
      .catch((error) => {
          console.error(error);
      });
    }

    onPress =()=>{

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
                            <Text style={[{fontWeight: 'bold'}]}>{i.spanish}</Text>
                            <Text >{i.tradution}</Text>
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