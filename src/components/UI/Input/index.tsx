import React from 'react';
import {
  Text, TextInput, GestureResponderEvent, TextInputProps
} from 'react-native';
import { styles } from './styles'

interface Props extends TextInputProps {
  handleChange(event: GestureResponderEvent): void,
  title: string,
  width?: string,
  height?: number,
  accessibilityLabel?: string,
  borderRadius?: number,
  children?: any
}

const InputUI = ({ 
    accessibilityLabel, defaultValue
  }: Props ) => {
    
  const {  } = styles
  return (
      <TextInput></TextInput>
  )
}

export default InputUI