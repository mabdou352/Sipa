// Components/search/ListeSociete.js

import React from 'react'
import { StyleSheet, View, FlatList, Text, ActivityIndicator  } from 'react-native'
// import SocieteItem from '../../components/search/SocieteItem'

import data from '../../constants/SipaDataAll.json'

export default class ListeSociete extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    dataSource: [],
  };
} 
componentDidMount() {
  this.setState({
    isLoading: false,
    dataSource: data.donnees
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
        renderItem={({item}) => {
          return( 
            <View>
              <Text style={styles.info}>{item.entite} est une filiale de {item.filiale_de}.></Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => item.toString()}
       />


      </View>
    );
  }
}


const styles = StyleSheet.create({
  info: {
    fontSize:24
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