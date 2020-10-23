import React from 'react';
import {
  Text, TouchableOpacity, GestureResponderEvent, TouchableOpacityProps
} from 'react-native';
import { styles } from './styles'

type Props = {
  handlePress(event: GestureResponderEvent): void,
  title: string,
  width?: string,
  height?: number,
  accessibilityLabel?: string,
  borderRadius?: number,
  children?: any
}

const ButtonUI = ({ 
    handlePress, 
    title,
    width, 
    height, 
    borderRadius, 
    accessibilityLabel, 
    children 
  }: Props ) => {

  const { ui__buttom, ui__buttom__tittle } = styles
  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={
        [ ui__buttom, 
          {
            width: width || ui__buttom.width,
            height: height || ui__buttom.height,
            borderRadius: borderRadius || ui__buttom.borderRadius
          }
        ]
      }
    >
      <Text 
        accessibilityLabel={accessibilityLabel || title}
        accessibilityRole="button"
        style={ui__buttom__tittle}
      >
        { children || title } 
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonUI