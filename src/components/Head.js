import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeadLine from './images/head_line.png';
import { updateLine } from '../redux/actions';
import { UPDATE_HEADLINE } from '../redux/actionTypes';

class Head extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selection: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	dictHead = {
		short: {
			option: 'Short',
			description: 'You are more impulsive with your decision-making, and instinct driven. You are not prone to overthinking things.'
		},

		long: {
			option: 'Long',
			description: 'If your head line comes within an eighth of an inch of the other side of your palm, you may have a hyperactive mind that needs continual engagement.'
		},

		longFrays: {
			option: 'Long and frays at the end',
			description: "Your thought systems don't really stop. You keep going around and around and find it difficult to formulate a conclusion."
		},

		wraps: {
			option: 'Wraps around the opposite side of the palm',
			description: "You have a connection with people who have gone to the other side. You often feel that you can communicate with those people, or even god. It's a very spiritual marking. But, you have trouble tending to details of the material world."
		}
	}

	handleChange(event) {
		this.setState.selection = event.target.value;

		const data = {
			type: UPDATE_HEADLINE,
			option: this.dictHead[event.target.value].option,
			description: this.dictHead[event.target.value].description
		}

		this.props.updateLine(data);
	}

	render() {
		return (
			<div className="view">

				<div className="view__left">

					<h1>Reading the Head Line</h1>
					<p>Your head line (also known as your wisdom line) represents all things mental – your intelligence, intuition, the strength of your will, and it can even show how you receive and react to information.</p>
					<br />

					<form>
						<label className="selectHeader" for="head"><b>Choose the option that best describes your Head Line: </b></label>
						<br />
						<select className="dropdown" id="headLine" name="headLine" value={this.state.value} onChange={this.handleChange}>
							<option value="short">{this.dictHead.short.option}</option>
							<option value="long">{this.dictHead.long.option}</option>
							<option value="longFrays">{this.dictHead.longFrays.option}</option>
							<option value="wraps">{this.dictHead.wraps.option}</option>
						</select>
					</form>
					<br />
					<p className="reading"> {this.props.headLine.description} </p>

				</div>

				<div className="view__right">
					<img className="hand" src={HeadLine} alt="illustration of a hand" />
				</div>

			</div>
		);
	}
}

const mapStateToProps = state => ({
	headLine: state.headLine
})

const mapDispatchToProps = dispatch => ({
	updateLine: data => dispatch (updateLine(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Head);