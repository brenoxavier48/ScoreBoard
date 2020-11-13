import React from 'react';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import ScoreCard from './index'

describe('ScoreCard tests', () => {

  const makeHandleFunctions = () => {
    const handlePress = jest.fn()
    const handleDelete = jest.fn()
    const handleEdit = jest.fn()

    return {
      handleDelete,
      handleEdit,
      handlePress
    }
  }

  test('Should call handlePress function and not the others', () => {
    const { handlePress, handleDelete, handleEdit } = makeHandleFunctions()
    const { getByA11yLabel } = render(<ScoreCard scoreTittle="Test" handlePress={handlePress} handleDelete={handleDelete} handleEdit={handleEdit}></ScoreCard>)
    const scoreTest = getByA11yLabel('Test')
    fireEvent.press(scoreTest)
    expect(handlePress).toBeCalled()
    expect(handleDelete).not.toBeCalled()
    expect(handleEdit).not.toBeCalled()
  })

  test('Should call handleEdit function and not the others', () => {
    const { handlePress, handleDelete, handleEdit } = makeHandleFunctions()
    const { getByA11yLabel } = render(<ScoreCard scoreTittle="Test" handlePress={handlePress} handleDelete={handleDelete} handleEdit={handleEdit}></ScoreCard>)
    const scoreDeleteTest = getByA11yLabel('delete')
    fireEvent.press(scoreDeleteTest)
    expect(handleDelete).toBeCalled()
    expect(handlePress).not.toBeCalled()
    expect(handleEdit).not.toBeCalled()
  })

  test('Should call handlePress function and not the others', () => {
    const { handlePress, handleDelete, handleEdit } = makeHandleFunctions()
    const { getByA11yLabel } = render(<ScoreCard scoreTittle="Test" handlePress={handlePress} handleDelete={handleDelete} handleEdit={handleEdit}></ScoreCard>)
    const scoreEditTest = getByA11yLabel('edit')
    fireEvent.press(scoreEditTest)
    expect(handlePress).not.toBeCalled()
    expect(handleDelete).not.toBeCalled()
    expect(handleEdit).toBeCalled()
  })
})