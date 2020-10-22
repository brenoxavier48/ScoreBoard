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
}

const ButtonUI = ({ handlePress, title, ...props }: Props) => {
  const { ui_buttom, ui__buttom__tittle } = styles
  const { width, height, borderRadius, accessibilityLabel } = props

  return (
    <>
      <TouchableOpacity 
        onPress={handlePress} 
        style={
          [ ui_buttom, 
            {
              width: width || ui_buttom.width,
              height: height || ui_buttom.height,
              borderRadius: borderRadius || ui_buttom.borderRadius
            }
          ]
        }
      >
        <Text 
          accessibilityLabel={accessibilityLabel || title}
          accessibilityRole="button"
          style={ui__buttom__tittle}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonUI