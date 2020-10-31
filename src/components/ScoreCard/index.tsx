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

const ScoreCard = () => {
  return (
    <TouchableOpacity>
      
    </TouchableOpacity>
  )
}

export default ScoreCard