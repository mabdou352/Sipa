import React, {Fragment} from 'react';


import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <View style={styles.main}><Text style={styles.bonjour}>Bonjour</Text></View>
    </Fragment>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    padding: 20,
    backgroundColor: "#E4E3E1",
},
  bonjour: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 40,
    textAlign: 'center',
    color: '#666666',
  }
});

export default App;
