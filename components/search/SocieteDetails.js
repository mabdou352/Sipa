// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class SocieteDetail extends React.Component {
  
  _displayDetailForSociete = (id) => {
    console.log("Display film with id " + item.id)
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail du film</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default SocieteDetail