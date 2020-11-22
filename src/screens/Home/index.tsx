import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ScoreCardFlatList from '../../components/ScoreCardFlatList'
import ButtonUI from '../../components/UI/Button'
import { styles } from './styles'

const Home = () => {
  const { 
      scrollView, 
      text__container, 
      text__container__content, 
      score__container, 
      logo_container } = styles
  const [inputvalue1, setInputValue1] = useState('')
  const [inputvalue2, setInputValue2] = useState('')

  const handleChangeText1 = (text: string) => {
    setInputValue1(text)
  }

  const handleChangeText2 = (text: string) => {
    setInputValue2(text)
  }

  return (
    <SafeAreaView style={scrollView}>
      <View style={logo_container}>
        <Text style={text__container__content}>
          Logo
        </Text>
      </View>
      <View style={text__container}>
        <Text style={text__container__content}>
          Choose the Score and play
        </Text>
      </View>
      <View style={score__container}>
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
        <ButtonUI
          handlePress={() => {}}
          title="New Template"
        ></ButtonUI>
      </View>
    </SafeAreaView>
  );
};

export default Home