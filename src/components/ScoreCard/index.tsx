import React, { useState, useEffect } from 'react';
import {
  View, TouchableOpacity, TouchableOpacityProps, Text, TextInput, Animated, TextInputProps
} from 'react-native';
import { styles } from './styles'

type Props = TouchableOpacityProps & {
  scoreTittle: string,
  pointsPerRound: number,
  handleDelete(): void,
  handleEdit(): void,
  handlePress(): void
}

const ScoreCard = (props: Props) => {
  const { container, container__data, container__action } = styles
  return (
    <View style={container}>
      <TouchableOpacity style={container__data}>
        <Text>Title: {props.scoreTittle}</Text>
        <Text>points: {props.scoreTittle}</Text>
      </TouchableOpacity>
      <View style={container__action}>
        <TouchableOpacity>
          <Text>
            X
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> C </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScoreCard