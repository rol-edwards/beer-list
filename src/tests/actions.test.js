import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {itemsFetchDataSuccess, getBeers } from '../actions'

const middlewares = [thunk] 

import {add2Cart} from '../actions'

const mockStore = configureStore(middlewares)

describe('actions', () => {
	describe('getBeers', () => {
		it('should execute getBeers', () => {
			const store = mockStore({});

			return store.dispatch(getBeers('1|2'))
			  const actions = store.getActions()
			  expect(actions[0]).toEqual(itemsFetchDataSuccess())
		})
	})
	describe('add2Cart', () => {
		it('should dispatch add2Cart', () => {
			const initialState = {}
			const store = mockStore(initialState)

			store.dispatch(add2Cart('placeholder'))

			const actions = store.getActions()
			const expectedPayload = { type: 'ADD_TO_CART', name: 'placeholder' }
			expect(actions).toEqual([expectedPayload])
		})
	})
})
