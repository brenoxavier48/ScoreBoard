import React from 'react';
import {
  View, Text, Switch, SwitchProps
} from 'react-native';
import { styles } from './styles'


type Props = SwitchProps & {
  label: string
}

const SwitchLabelUI = (props: Props) => {
  const { label } = props
  const { container, container__label } = styles
  return (
    <View style={container}>
      <Text style={container__label}>
        {label}
      </Text>
      <Switch
        trackColor={{false: 'rgb(25, 25, 26)', true: '#fb7700'}}
        {...props}
      >
      </Switch>
    </View>
  )
}

export default SwitchLabelUI