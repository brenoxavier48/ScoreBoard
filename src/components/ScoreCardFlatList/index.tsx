import React, { useState, useEffect } from 'react';
import {
  View, FlatList, FlatListProps, SafeAreaView
} from 'react-native';
import { styles } from './styles'
import ScoreCard from '../ScoreCard'
import { fireEvent } from '@testing-library/react-native';

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
  const {  } = styles

  return (
    <SafeAreaView >
      <FlatList
        data={data}
        renderItem={renderScoreCardItem}
        keyExtractor={item => String(item.id)}
        horizontal
      />
    </SafeAreaView>
  )
}

export default ScoreCardFlatList