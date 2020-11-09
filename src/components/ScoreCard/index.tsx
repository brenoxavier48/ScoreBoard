import React, { useState, useEffect } from 'react';
import {
  View, TouchableOpacity, TouchableOpacityProps, Text, TextInput, Animated, TextInputProps
} from 'react-native';
import { styles } from './styles'

type Props = TouchableOpacityProps & {
  scoreTittle: string,
  handleDelete(): void,
  handleEdit(): void,
  handlePress(): void
}

const ScoreCard = (props: Props) => {
  const { scoreTittle } = props
  const { 
    container, 
    container__data,
    container__data__tittle,
    container__action,
    container__action__delete, 
    container__action__edit,
    container__action__text } = styles
  return (
    <View style={container}>
      <TouchableOpacity 
        style={container__data}
        activeOpacity={0.8}
      >
        <Text style={container__data__tittle}>
          {scoreTittle}
        </Text>
      </TouchableOpacity>
      <View style={container__action}>
        <TouchableOpacity style={container__action__edit}>
          <Text style={[container__action__text, {bottom: 0, left: 0}]}>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={container__action__delete}>
          <Text style={[container__action__text, {top: 0, right: 0}]}>
             X 
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScoreCard