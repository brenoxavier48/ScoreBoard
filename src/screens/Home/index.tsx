import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text
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
        <ScoreCardFlatList></ScoreCardFlatList>
        <ButtonUI
          handlePress={() => {}}
          title="New Template"
        ></ButtonUI>
      </View>
    </SafeAreaView>
  );
};

export default Home