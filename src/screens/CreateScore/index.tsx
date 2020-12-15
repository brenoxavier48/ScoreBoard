import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { ScoreModel } from '../../domain/models/scoreModel'
import InputUI from '../../components/UI/Input'
import ButtonUI from '../../components/UI/Button'
import { addScore } from '../../store/Score/score.actions'
import { selectOneScore } from '../../store/Score/score.selectors'
import { styles } from './styles'

type Props = {
  isEdit?: boolean,
  idScore?: number
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