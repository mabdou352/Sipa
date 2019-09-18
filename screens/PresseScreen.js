// screen/PresseScreen.js

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListePresse  from '../components/search/ListePresse';



export default function PresseScreen() {
  return (
    <ScrollView style={styles.container}>
        <ListePresse />  
    </ScrollView>
  );
}

PresseScreen.navigationOptions = {
  title: 'Les titres du groupe',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
