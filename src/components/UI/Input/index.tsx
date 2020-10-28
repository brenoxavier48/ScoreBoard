import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Animated, TextInputProps
} from 'react-native';
import { styles } from './styles'

type Props = TextInputProps & {
  handleChangeText(text: String): void,
  label: string,
  value: string,
  width?: string,
}

const InputUI = (props: Props ) => {
  const { value, label, handleChangeText, width } = props
  const { ui__input, ui__inputLabel, ui__container } = styles

  const [ isFocused, setIsFocused] = useState<Boolean>(false)
  const [ _animatedIsFocused ] = useState<Animated.Value>(new Animated.Value(0));
  const animationConfig: Animated.TimingAnimationConfig = {
    toValue: 0,
    duration: 200,
    useNativeDriver: false
  }

  useEffect(() => {
    animationConfig.toValue = isFocused || value ? 1 : 0
  }, [isFocused])

  useEffect(() => {
    Animated
      .timing(_animatedIsFocused, animationConfig)
      .start()
  }, [isFocused])

  const handleFocused = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const labelStyleDetails = {
    opacity: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0.36, 1]
    }),
    top: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0]
    }),
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 14]
    })
  }

  return (
    <View style={[
      ui__container,
      { width: width || "70%" }]}
    >
      <Animated.Text 
        style={[ 
          ui__inputLabel, 
          labelStyleDetails
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        style={ui__input}
        accessibilityLabel={label}
        onChangeText={handleChangeText}
        onFocus={handleFocused}
        onBlur={handleBlur}
        {...props}
      >
      </TextInput>
    </View>
  )
}

export default InputUI