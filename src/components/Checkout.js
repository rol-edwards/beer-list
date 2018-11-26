import React from 'react'
import PropTypes from 'prop-types'

const Checkout = ({cart}) => (
	<div>
		<h1 className='cart'>Checkout</h1>
			<table>
			<tr>
			<th>Beer</th>
			<th>Quantity</th>
			</tr>
			{cart.map(beer =>
				<tr>
				<td>{beer.name}</td>
				<td>{beer.quantity}</td>
				</tr>
			)}
			</table>
	
	</div>
)

Checkout.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
		  name: PropTypes.string.isRequired,
		  quantity: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
	
}

export default Checkout  