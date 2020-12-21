import React, { Component } from 'react';
import { connect } from 'react-redux';
import FateLine from './images/fate_line.png';
import { updateLine } from '../redux/actions';
import { UPDATE_FATELINE } from '../redux/actionTypes';

class Fate extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selection: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	dictFate = {
		breaks: {
			option: 'Breaks in the line',
			description: 'You will have some bad luck or major losses in your life.'
		},

		double: {
			option: 'Double line',
			description: 'You will have a particularly successful career.'
		}
	}

	handleChange(event) {
		this.setState.selection = event.target.value;

		const data = {
			type: UPDATE_FATELINE,
			option: this.dictFate[event.target.value].option,
			description: this.dictFate[event.target.value].description
		}
		this.props.updateLine(data);
	}


	render() {
		return (
			
			<div className="view">

			<div className="view__left">

				<h1>Reading the Fate Line</h1>
				<p>The fate line indicates how much of your life is affected by circumstances beyond your control. It represents what may influence your path in life, from your career to your personal choices to your ancestry. It represents how safe, or taken care of, we feel in the world.</p>
				<br />

				<form>
					<label className="selectHeader" for="fate"><b>Choose the option that best describes your Fate Line: </b></label>
					<br />
					<select className="dropdown" id="fateLine" name="fateLine" value={this.state.value} onChange={this.handleChange}>
						<option value="breaks">{this.dictFate.breaks.option}</option>
						<option value="double">{this.dictFate.double.option}</option>
					</select>
				</form>
				<br />
				<p className="reading"> {this.props.fateLine.description} </p>

			</div>

			<div className="view__right">
				<img className="hand" src={FateLine} alt="illustration of a hand" />
			</div>

			</div>
		);
	}
}

const mapStateToProps = state => ({
	fateLine: state.fateLine
})

const mapDispatchToProps = dispatch => ({
	updateLine: data => dispatch (updateLine(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Fate);