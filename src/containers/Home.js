import { connect } from 'react-redux'
import { getBeers } from '../actions'
import { add2Cart } from '../actions'
import Home from '../components/Home'


const mapStateToProps = state => ({
	beers: state.beers,
	isLoading: state.isLoading,
	hasErrored: state.hasErrored
})

const mapDispatchToProps = dispatch => ({
	add2Cart: name => dispatch(add2Cart(name)),
	getBeers: number => dispatch(getBeers(number))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home) 