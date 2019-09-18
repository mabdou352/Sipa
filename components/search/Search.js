// Components/Search.js

import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList  } from 'react-native'

import data from '../../constants/SipaDataAll'

// import SocieteItem from '../../components/search/SocieteItem'


class Search extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
      searchedText: "",
      dataSource: []

      }
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: data
    
    });
  }
  _searchTextInputChanged(text) {
      this.setState({ searchedText: text })
  }

  _loadSociete() {
    if (this.state.searchedText.length > 0) { 
          console.log(this.state.searchedText)

          // this.setState({ sipa: data.results })
    }
}

  render() {
    return (
      <View >
        <TextInput style={styles.textinput}  placeholder='Societe' onChangeText={(text) => this._searchTextInputChanged(text)} />
        <Button style={styles.button}  title='Rechercher' onPress={() => this._loadSociete()}/>
       
        {/* <FlatList
        data={this.state.dataSource}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <SocieteItem dataSource={item}/>}
        /> */}

      </View>
    )
  }
}
export default Search;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  button: {
    marginTop:10,
    backgroundColor:'red',
  },  
  textinput: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 5,
    fontSize:18,
    minWidth:250,
    borderRadius: 20
  }
})