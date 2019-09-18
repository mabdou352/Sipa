// Components/search/SocieteItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class SocieteItem extends React.Component {
    render() {
      const sipa = this.props.dataSource
      
      
        return (
          <View style={styles.main_container}>
          <TouchableOpacity
            style={styles.main_container}
            onPress={() => console.log(sipa.id)}>
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{sipa.entite}</Text>
                <Text style={styles.filiale_text}>{sipa.filiale_de}</Text>
              </View>
              <View>
              <Image
                style={styles.logo}
                source={sipa.ident_visuel}
              />
            </View>
              {/* <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={3}>{sipa.descriptif}</Text>
              </View> */}
              {/* <View style={styles.date_container}>
                <Text style={styles.date_text}> {sipa.code_postal}</Text>
              </View> */}
            </View>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    // height: 190,
    // flexDirection: 'row'
  },
  logo: {
    width: '100%',
    height: 166,
    backgroundColor: 'gray',
    flexWrap: 'wrap'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flexDirection: 'row',
    flex: 3,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  filiale_text: {
    fontSize: 13,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default SocieteItem