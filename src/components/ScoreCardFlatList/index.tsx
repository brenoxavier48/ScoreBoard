import React from 'react';
import { FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { removeScore } from '../../store/Score/score.actions'
import { selectAllScores } from '../../store/Score/score.selectors'

import { ScoreModel } from '../../domain/models/scoreModel'
import ScoreCard from '../ScoreCard'

interface ScoreCardProps {
  id: number,
  scoreTittle: string,
  handleDelete(): void,
  handleEdit(): void,
  handlePress(): void
}

const ScoreCardItem = (item: ScoreCardProps) => (
  <ScoreCard
    scoreTittle={item.scoreTittle}
    handleDelete={item.handleDelete}
    handleEdit={item.handleEdit}
    handlePress={item.handlePress}
  ></ScoreCard>
)

type PropsRenderItem = {
  item: ScoreCardProps
}

const renderScoreCardItem = ({ item }: PropsRenderItem) => (
  <ScoreCardItem {...item} ></ScoreCardItem>
)

const ScoreCardFlatList = () => {
  const dispatch = useDispatch()
  const scores = useSelector(selectAllScores)

  const data = scores.map((score: ScoreModel) => ({
    id: score.id,
    scoreTittle: score.tittle,
    handlePress: () => {},
    handleEdit: () => {},
    handleDelete: () => dispatch(removeScore(score.id))
  }))

  return (
      <FlatList
        data={data}
        renderItem={renderScoreCardItem}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
  )
}

export default ScoreCardFlatList