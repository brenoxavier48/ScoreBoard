import React, { useState } from 'react';
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
  const { idScore } = props
  const { scrollView } = styles
  
  const score: ScoreModel = typeof idScore === 'number' 
  ? useSelector(selectOneScore(idScore)) 
  : null
  
  const [ tittle, setTittle ] = useState<string>(score ? score.tittle : '')
  const [ pointToWinValue, setPointToWinValue ] = useState<number>(score && score.pointsToWin ? score.pointsToWin : 0)
  const [ freePoints, setFreePoints ] = useState<boolean>(score ? score.freePoints :false)
  const [ pointsPerBid, setPointsPerBid ] = useState<number[]>(score && score.pointsPerBid ? score.pointsPerBid : [])
  
  return (
    <SafeAreaView style={scrollView}>
      <InputUI
        label={"Tittle"}
        value={tittle}
        onChangeText={setTittle}
      ></InputUI>
    </SafeAreaView>
  )
}

export default CreateScore