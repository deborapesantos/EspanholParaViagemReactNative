import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import Style from '../../../telas/Theme/Style';
import ListsProcess from '../../Process/ListsProcess';

const ListsProcessInstance = new ListsProcess();

export default class Phrases extends React.Component {

    static navigationOptions = {
        title: 'Frases en español',
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
      ListsProcessInstance.getPhrases()
      .then((response) => response.json())
      .then((responseJson) => {

            this.setState({
              isLoading: false,
                comprimentar: Object(responseJson).filter((item)=>{
                  return item.type == '_comprimentar';
                })               
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                pedirajuda: Object(responseJson).filter((item)=>{
                  return item.type == '_pedirajuda';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                restaurante: Object(responseJson).filter((item)=>{
                  return item.type == '_res';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                comprarpassagem: Object(responseJson).filter((item)=>{
                  return item.type == '_comprarpassagem';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                localizar: Object(responseJson).filter((item)=>{
                  return item.type == '_localizar';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                direcao: Object(responseJson).filter((item)=>{
                  return item.type == '_direcao';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                hotel: Object(responseJson).filter((item)=>{
                  return item.type == '_hotel';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                aeroporto: Object(responseJson).filter((item)=>{
                  return item.type == '_aeroporto';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                compras: Object(responseJson).filter((item)=>{
                  return item.type == '_compras';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
                outros: Object(responseJson).filter((item)=>{
                  return item.type == '_outros';
                })
                .sort(function(a, b){
                  if(a.spanish < b.spanish) { return -1; }
                  if(a.spanish > b.spanish) { return 1; }
                  return 0;
                }),
              });
       })
       .catch((error) => {
        console.error(error);
      })  
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
                    <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Comprimentar</Text>
                    <ScrollView style={{width: '100%'}} >
                      {this.state.comprimentar.map(i => 
                      
                          <TouchableOpacity onPress={ () =>  this.onPress()}>
                          <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                             { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                             { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                            <Text>{i.spanish}</Text>
                            <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                          </View>
                          </TouchableOpacity>
                      )}
                      </ScrollView>

                      <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Pedindo ajuda</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.pedirajuda.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Comprando passagem</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.comprarpassagem.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Fazendo compras</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.compras.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Se localizando</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.localizar.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Direções</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.direcao.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Hospedando-se</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.hotel.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>
                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>No aeroporto</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.aeroporto.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>No restaurante</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.restaurante.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
                              <Text>{i.spanish}</Text>
                              <Text style={[{color:'red'}]}>{i.tradution}</Text> 
                            </View>
                            </TouchableOpacity>
                        )}
                        </ScrollView>

                        <Text style={{backgroundColor: '#f2f2f2',  padding: 20, marginVertical: 3, alignItems: 'stretch'}}>Outras frases</Text>
                      <ScrollView style={{width: '100%'}} >
                        {this.state.outros.map(i => 
                        
                            <TouchableOpacity onPress={ () =>  this.onPress()}>
                            <View style={{backgroundColor: '#fff', borderBottomColor:'#ccc',borderBottomWidth:1, padding: 20, marginVertical: 3, alignItems: 'stretch'}}>
                              { !i.title ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text style={[{fontWeight:'bold'}]} >{i.title}</Text>} 
                              { !i.explication ? <Text style={[{fontSize:0, padding:0}]}></Text> : <Text >{i.explication}</Text>}
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