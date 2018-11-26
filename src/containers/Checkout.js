import { connect } from 'react-redux'
import { removeVid } from '../actions'
import { showState } from '../actions'
import Checkout from '../components/Checkout'

const mapStateToProps = state => ({
	cart: state.cart
})

export default connect(
	mapStateToProps
)(Checkout)

