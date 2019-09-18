// Components/search/ListeRadio.js

import React from 'react'
import { StyleSheet, View, Image, FlatList, Text, ActivityIndicator  } from 'react-native'
import SocieteItem from '../../components/search/SocieteItem'

import data from '../../constants/SipaRadio'

export default class ListeRadio extends React.Component {
constructor(props) {
  super(props); 
  this.state = {
    isLoading: true,
    dataSource: []
  };
}
componentDidMount() {
  this.setState({
    isLoading: false,
    dataSource: data,

    });
}
  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex:1, paddingTop:20}}>
          <ActivityIndicator/> 
        </View>
      )
  }
    return(
      <View style={{flex:1, paddingTop:20}}>
        <FlatList
        data={this.state.dataSource}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <SocieteItem dataSource={item}   />}
        />


      </View>
    );
  }
}


const styles = StyleSheet.create({
  info: {
    fontSize:14
  },
  button: {
    backgroundColor:'red',
  },  
  textinput: {
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    fontSize:18,
    minWidth:300
  }
})