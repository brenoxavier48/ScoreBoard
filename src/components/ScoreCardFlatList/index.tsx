import React from 'react';
import {
  FlatList, SafeAreaView
} from 'react-native';
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

type Props = {
  data: Array<ScoreCardProps>
}

const ScoreCardFlatList = (props: Props) => {
  const { data } = props

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