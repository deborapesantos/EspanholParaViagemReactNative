import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,List } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,FlatList } from 'native-base';
import Style from '../../../telas/Theme/Style';
import ListsProcess from '../../Process/ListsProcess';

const ListsProcessInstance = new ListsProcess();

export default class Words extends React.Component {
    static navigationOptions = {
        title: 'Palabras en español',
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
        ListsProcessInstance.getJsonWords()
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading: false,
                pessoa: Object(responseJson).filter((item)=>{
                    return item.type == '_pessoa';
                }),
                pronomepessoal: Object(responseJson).filter((item)=>{
                    return item.type == '_pronomepessoal';
                }),
                pronomepos: Object(responseJson).filter((item)=>{
                    return item.type == '_pronomepos';
                }),
                preposicao: Object(responseJson)
                .filter((item)=>{
                    return item.type == '_prepo';
                }).sort(function(a, b){
                    if(a.spanish < b.spanish) { return -1; }
                    if(a.spanish > b.spanish) { return 1; }
                    return 0;
                }),
                outros: Object(responseJson)
                .filter((item)=>{
                    return item.type == '_normal';
                })
                .sort(function(a, b){
                    if(a.spanish < b.spanish) { return -1; }
                    if(a.spanish > b.spanish) { return 1; }
                    return 0;
                }),
              }, function(){
      
              });
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
  
      return(
        <Container style={Style.bgMain} backgroundColor="#fff">
            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
            <View>
                <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Pessoas</Text>

                <ScrollView style={{width: '100%'}} >
                      {this.state.pessoa.map(i => 
                      
                          <TouchableOpacity onPress={ () =>  this.onPress()}>
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                          <Text>{i.spanish}</Text>
                          <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                          </View>
                          </TouchableOpacity>
                      )}
                </ScrollView>
                <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Pronomes Pessoais</Text>

                <ScrollView style={{width: '100%'}} >
                      {this.state.pronomepessoal.map(i => 
                      
                          <TouchableOpacity onPress={ () =>  this.onPress()}>
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                          <Text>{i.spanish}</Text>
                          <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                          </View>
                          </TouchableOpacity>
                      )}
                      </ScrollView>

                      <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Pronomes Possessivos</Text>

                    <ScrollView style={{width: '100%'}} >
                        {this.state.pronomepos.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                            <Text>{i.spanish}</Text>
                            <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                      
                      

                <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Preposições</Text>

                <ScrollView style={{width: '100%'}} >
                      {this.state.preposicao.map(i => 
                      
                          <TouchableOpacity onPress={ () =>  this.onPress()}>
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                          <Text>{i.spanish}</Text>
                          <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                          </View>
                          </TouchableOpacity>
                      )}
                </ScrollView>

                <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Outras Palavras</Text>

                <ScrollView style={{width: '100%'}} >
                      {Object(this.state.outros).map(i => 
                      
                          <TouchableOpacity onPress={ () =>  this.onPress()}>
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