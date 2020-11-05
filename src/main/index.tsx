import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ScoreCard from '../components/ScoreCard'



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
        <ScoreCard
          scoreTittle="title"
          pointsPerRound={3}
          handleDelete={()=>{}}
          handleEdit={()=>{}}
          handlePress={()=>{}}
        ></ScoreCard>
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
