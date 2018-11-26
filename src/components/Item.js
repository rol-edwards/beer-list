import React from 'react'
import PropTypes from 'prop-types'


const Item = ({add2Cart, id, name}) => (
	<div>
		<tr>
			<td>{name}</td>
			<td><button className='button' onClick={add2Cart}>Add to cart</button></td>
		</tr>
	</div>
)

Item.propTypes = {
	add2Cart: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	
}

export default Item