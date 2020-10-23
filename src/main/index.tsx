import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import InputUI from '../components/UI/Input'



const App = (props: any) => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <Text style={styles.body}> Hello world </Text>
        <InputUI></InputUI>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(25, 25, 26)',
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    color: 'red',
  }
});

export default App;
