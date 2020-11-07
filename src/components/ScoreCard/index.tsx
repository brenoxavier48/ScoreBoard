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
  const { 
    container, 
    container__data, 
    container__action,
    container__action__delete, 
    container__action__edit } = styles
  return (
    <View style={container}>
      <TouchableOpacity style={container__data}>
        <Text>Title: {props.scoreTittle}</Text>
        <Text>points: {props.scoreTittle}</Text>
      </TouchableOpacity>
      <View style={container__action}>
        <TouchableOpacity style={container__action__edit}>
          <Text>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={container__action__delete}>
          <Text> X </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScoreCard