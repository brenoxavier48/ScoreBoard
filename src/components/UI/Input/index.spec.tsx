import React from 'react';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import InputUI from './index'

describe('Input Component tests', () => {

  test('Should has correctly accessibility label', async () => {
    const LABEL = "input-test"
    const { getByA11yLabel } = render(<InputUI label={LABEL} value=""></InputUI>)
    const input = getByA11yLabel('input-test')
    expect(input.props.accessibilityLabel).toBe(LABEL)
  })

  test('Should calls handleChangeText correctly and pass the correct value', async () => {
    const mockHandleChangeText = jest.fn()
    const { getByA11yLabel } = render(<InputUI label="input-test" value="" onChangeText={mockHandleChangeText} ></InputUI>)
    const input = getByA11yLabel('input-test')
    fireEvent.changeText(input, 'test')
    expect(mockHandleChangeText).toBeCalled()
  })
})