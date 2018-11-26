
function reducer (state = {}, action){
	switch (action.type){

		case 'ADD_TO_CART':
			const newCart = state.cart;
			var count = 0;
			newCart.forEach(function(beer){

				if (action.name == beer.name){
					beer.quantity += 1
					return
				}
				count +=1
			})
			if (count == newCart.length){
					newCart.push({name: action.name, quantity: 1})
				}
			return Object.assign({}, state, {
				cart: newCart
			})
		
		case 'ITEMS_FETCH_DATA_SUCCESS':
			return Object.assign({}, state, {
				beers: state.beers.concat(action.items)
			})

		case 'ITEMS_IS_LOADING':
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})

		case 'ITEMS_HAS_ERRORED':
			return Object.assign({}, state, {
				hasErrored: action.hasErrored
			})

		default:
			return state

	}
}

export default reducer

