import reducer from '../reducers'
import add2Cart from '../actions'
const state = {
        beers: [],
        cart: [],
        isLoading: false,
        hasErrored: false
      }
describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(state, {})).toEqual(
      {
        beers: [],
        cart: [],
        isLoading: false,
        hasErrored: false
      }
    )
  })
  it('should handle ADD_TO_CART', () => {
    expect(
      reducer(state, {
        type: 'ADD_TO_CART',
        name: 'some_beer'
      })
    ).toEqual(
      {
        beers: [],
        cart: [{name: 'some_beer', quantity: 1}],
        isLoading: false,
        hasErrored: false
      }
    )
  })
})