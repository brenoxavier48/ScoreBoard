import React from 'react';
import renderer from 'react-test-renderer';
import ButtonUI from './index'

describe('Button Component tests', () => {

  test('Should renders correctly', () => {
    const button = renderer.create(<ButtonUI />).toJSON()
    console.log(button)

  })
})