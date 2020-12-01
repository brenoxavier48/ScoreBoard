import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import ScoreCardFlatList from '../../components/ScoreCardFlatList'
import ButtonUI from '../../components/UI/Button'
import { styles } from './styles'

type Props = {
  isEdit?: boolean
}

const CreateScore = (props: Props) => {
  const {
    scrollView
  } = styles

  return (
    <SafeAreaView style={scrollView}>

    </SafeAreaView>
  )
}

export default CreateScore