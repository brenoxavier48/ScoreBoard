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
import ScoreCardFlatList from '../components/ScoreCardFlatList'
import ButtonUI from '../components/UI/Button'
import Input from '../components/UI/Input'




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
          scoreTittle="futebol game"
          handleDelete={() => {}}
          handleEdit={() => {}}
          handlePress={() => {}}
        ></ScoreCard>
        <ButtonUI
          handlePress={() => {}}
          title="New Template"
        ></ButtonUI>
        <ButtonUI
          handlePress={() => {}}
          title="+"
          width="8%"
          height={34}
          borderRadius={50}
        ></ButtonUI>
        <Input handleChangeText={() => {}}
          label="E-mail"
          value={""}
        ></Input>
        <Input handleChangeText={() => {}}
          label="Duda"
          value={""}
        ></Input>
        <ScoreCardFlatList data={[{
          id: 1,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },{
          id: 2,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },{
          id: 3,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },{
          id: 4,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },{
          id: 5,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },{
          id: 6,
          scoreTittle: "Teste",
          handleDelete: () => {},
          handleEdit: () => {},
          handlePress: () => {},
        },]}></ScoreCardFlatList>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(25, 25, 26)',
    flex: 1,
    fontFamily: ''
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
