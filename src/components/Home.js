import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import getIds from '../getIds.js'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.myRef = React.createRef()
		this.scrollToMyRef = this.scrollToMyRef.bind(this)
	}

	scrollToMyRef(){
	    window.scrollTo({
	        top:this.myRef.current.offsetTop, 
	        behavior: "smooth"
	    })
	}

	componentDidMount(){
		if (this.props.beers.length == 0){
			this.props.getBeers(getIds(0))
		}
	}

	componentDidUpdate(){
		this.scrollToMyRef()
	}

	render(){

		if (this.props.isLoading){
			var loader = (<div className='loader'></div>)
		}
		else {
			var loader = (<div></div>);

		}
		return(
			<div>

		<h1>Beers!</h1>
		<table className='list'>
			{this.props.beers.map(beer =>
				<Item
					key={beer.id}
					id={beer.id}
					name={beer.name}
					add2Cart={() => {this.props.add2Cart(beer.name)}}
				/>
			)}
		</table>
		<button ref={this.myRef} className='load' onClick={() => this.props.getBeers(getIds(this.props.beers.length))}>Load more</button>
		{loader}
	</div>
		)
	}
}

Home.propTypes = {
	beers: PropTypes.arrayOf(
		PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	add2Cart: PropTypes.func.isRequired,
	getBeers: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
	
}

export default Home  