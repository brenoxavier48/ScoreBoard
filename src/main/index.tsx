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
import Home from '../screens/Home'



const App = (props: any) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home></Home>
    </>
  )
}

export default App;
