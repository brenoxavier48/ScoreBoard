import React, {useState} from 'react';
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

  const [inputvalue1, setInputValue1] = useState('')
  const [inputvalue2, setInputValue2] = useState('')

  const handleChangeText1 = (text: string) => {
    setInputValue1(text)
  }

  const handleChangeText2 = (text: string) => {
    setInputValue2(text)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <InputUI label="title"  keyboardAppearance="dark" value={inputvalue1} handleChangeText={handleChangeText1}></InputUI>
        <InputUI label="title" value={inputvalue2} handleChangeText={handleChangeText2}></InputUI>
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
