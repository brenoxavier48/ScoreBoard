import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import ScoreCardFlatlist from './index'

describe('ScoreCardFlatlist tests', () => {

  const makeDataMock = (numberOfRegisters: number) => {
    const data = []
    for (let i = 1; i <= numberOfRegisters; i++) {
      const scoreCardProp = Object.assign({
        id: i,
        scoreTittle: "Teste",
        handleDelete: () => {},
        handleEdit: () => {},
        handlePress: () => {},
      })
      data.push(scoreCardProp)
    }
    return { data }
  }

  test('Should render the correct number of ScoreCards', () => {
    const NUMBER_OF_REGISTERS = 5
    const { data } = makeDataMock(NUMBER_OF_REGISTERS)
    const { getAllByA11yLabel } = render(<ScoreCardFlatlist data={data}></ScoreCardFlatlist>)
    const scoreCardFlatListTest = getAllByA11yLabel('Teste')
    expect(scoreCardFlatListTest.length).toBe(NUMBER_OF_REGISTERS)
  })
})