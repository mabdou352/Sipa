// Components/SocieteItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'

class SocieteItem extends React.Component {
    render() {
        
      const sipa = this.props.dataSource
        
        return (
          <View style={styles.main_container}>
            <Image
            style={styles.logo}
            source={sipa.ident_visuel}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{sipa.entite}</Text>
                <Text style={styles.filiale_text}>{sipa.filiale_de}</Text>
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 190,
    },
    logo: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray',
      backgroundSize:'contain'
    },
      content_container: {
      flex: 1,
      margin: 5
    },
      header_container: {
      flex: 3,
      flexDirection: 'row'
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // main_container: {
  //   height: 190,
  //   flexDirection: 'row'
  // },
  // logo: {
  //   width: 120,
  //   height: 180,
  //   margin: 5,
  //   backgroundColor: 'gray'
  // },
  // content_container: {
  //   flex: 1,
  //   margin: 5
  // },
  // header_container: {
  //   flex: 3,
  //   flexDirection: 'row'
  // },
  // title_text: {
  //   fontWeight: 'bold',
  //   fontSize: 20,
  //   flex: 1,
  //   flexWrap: 'wrap',
  //   paddingRight: 5
  // },
  // filiale_text: {
  //   fontSize: 13,
  //   color: '#666666'
  // },
  // description_container: {
  //   flex: 7
  // },
  // description_text: {
  //   fontStyle: 'italic',
  //   color: '#666666'
  // },
  // date_container: {
  //   flex: 1
  // },
  // date_text: {
  //   textAlign: 'right',
  //   fontSize: 14
  // }
})

export default SocieteItem