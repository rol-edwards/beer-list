import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../components/Home'
Enzyme.configure({ adapter: new Adapter() })

const beers = [{id: 1, name: "whatever"}, {id: 2, name: 'yeah'}];

function setup() {
  const props = {
    add2Cart: jest.fn(),
    getBeers: jest.fn(),
    isLoading: false,
    beers: beers
  }
  
  const enzymeWrapper = shallow(<Home  {...props}/>)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('button').hasClass('load')).toBe(true)
      expect(enzymeWrapper.find('h1').text()).toBe('Beers!')
      const ItemProps = enzymeWrapper.find('Item').first().props()
      expect(ItemProps.name).toBe('whatever')
    })
    it('should call getBeers if button pressed', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('.load')
      input.simulate('click')
      expect(props.getBeers.mock.calls.length).toBe(1)
    })
  })
})