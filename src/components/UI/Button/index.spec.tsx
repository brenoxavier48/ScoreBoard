import React from 'react';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import ButtonUI from './index'

describe('Button Component tests', () => {

  test('Should has correctly accessibility label', async () => {
    const LABEL = 'test-button'
    const { getByA11yLabel } = render(<ButtonUI title="tittle" accessibilityLabel={LABEL} handlePress={() => {}} />)
    const { getByA11yLabel: getByAllyLabelv2 } = render(<ButtonUI title={LABEL} handlePress={() => {}} />)
    const button = getByA11yLabel('test-button')
    const buttonv2 = getByAllyLabelv2('test-button')
    expect(button.props.accessibilityLabel).toBe(LABEL)
    expect(buttonv2.props.accessibilityLabel).toBe(LABEL)
  })

  test('Should calls haandlePress correctly', async () => {
    const mockFunction = jest.fn()
    const { getByA11yLabel } = render(<ButtonUI title="test-button" handlePress={mockFunction} />)
    const button = getByA11yLabel('test-button')
    fireEvent.press(button)
    expect(mockFunction).toBeCalled()
  })
})