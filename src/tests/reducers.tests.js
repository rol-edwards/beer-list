import reducer from '../reducers/todos'
​
describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        beers: [],
        cart: [],
        isLoading: false,
        hasErrored: false
      }
    ])
  })
​
  it('should handle ADD_TO_CART', () => {
    expect(
      reducer([], {
        type: types.ADD_TO_CART,
        name: 'some_beer'
      })
    ).toEqual([
      {
        beers: [],
        cart: [{name: 'some_beer', quantity: 1}],
        isLoading: false,
        hasErrored: false
      }
    ])
  })
})