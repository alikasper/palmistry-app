import React, { Component } from 'react';
import { connect } from 'react-redux';
import LifeLine from './images/life_line.png';
import { updateLine } from '../redux/actions';
import { UPDATE_LIFELINE } from '../redux/actionTypes';

class Life extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			selection: ''
		}
	  	
		this.handleChange = this.handleChange.bind(this);
	}

	  
	dictLife = {
		short: {
			option: 'Short', 
			description: "You are independent and very hard working.",

		},

		round: {
			option: 'Round and robust',
			description: "The longer and more pronounced the life line is, the more full of life you are. You are a vibrant person with high vitality."
		},

		splits: {
			option: 'Splits about an inch above the wrist',
			description: "You seek stimiluation beyond your home. You enjoy traveling, learning about different cultures, and exploring higher levels of consciousness."
		}
	}
	
	handleChange(event) {
		this.setState.selection = event.target.value;

		const data = {
			type: UPDATE_LIFELINE,
			option: this.dictLife[event.target.value].option,
			description: this.dictLife[event.target.value].description
		}
		this.props.updateLine(data);
	}
	

	render() {
		return (

			<div className="view">

				<div className="view__left">

					<h1>Reading the Life Line</h1>
					<p>The life line is our vitality. It indicates general well-being, physical health, and major life changes. It indicates the path your life will take. But, contrary to popular belief, it does not dictate when you'll die.</p>
					<br />

					<form>
						<label className="selectHeader" for="life">Choose the option that best describes your Life Line:</label>
						<br />
						<select className="dropdown" id="lifeLine" name="lifeLine" value={this.state.value} onChange={this.handleChange}>
							<option value="short">{this.dictLife.short.option}</option>
							<option value="round">{this.dictLife.round.option}</option>
							<option value="splits">{this.dictLife.splits.option}</option>
						</select>
					</form>
					<br />
					<p className="reading"> {this.props.lifeLine.description} </p>

				</div>

				<div className="view__right">
					<img className="hand" src={LifeLine} alt="illustration of a hand" />
				</div>

			</div>

		);
	}
}

const mapStateToProps = state => ({
	lifeLine: state.lifeLine
})

const mapDispatchToProps = dispatch => ({
	updateLine: data => dispatch (updateLine(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Life);