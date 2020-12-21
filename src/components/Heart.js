import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeartLine from './images/heart_line.png';
import { updateLine } from '../redux/actions';
import { UPDATE_HEARTLINE } from '../redux/actionTypes';

class Heart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selection: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	dictHeart = {
		short: {
			option: 'Short line with no curve',
			description: "A short heart line tends to signal narcissism or self-centeredness. If your heart line starts under your index finger, you have a satisfying (but selective) approach to love. If it starts beneath the middle finger, you're selfish or even insatiable when it comes to love and affection. If you have a short heart line that stops under the middle finger and does not curve up it is likely that you are more of a hermit, and prefer to be alone. You love to work and are very productive. You have a non-negotiable need for sanctuary time."
		},

		flat: {
			option: 'More flat than curved',
			description: "A straight heart line suggests stability, affability, and approachability. You are rational in your approach to interpersonal relationships. You are thoughtful and considerate, perhaps with a tendancy to think intensely about feelings."
		},

		curveMid: {
			option: 'Curves dramaticallly toward middle finger',
			description: "A heart line that curves upward suggests you're strong at communicating your love. You are a passionate person, focused on your desires. You go after what you want, when you want it. You expect others to know what you want, too."
		},

		curveEdge: {
			option: 'Curves up from edge under pinky toward index finger',
			description: "A heart line that curves upward suggests you're strong at communicating your love. You are a caring, giving, and empathetic person in relationships."
		},

		curveDown: {
			option: "Curves downward",
			description: "A heart line that curves downward can supposedly indicate you feel uneasy in relationships. This can give your partner an uneasy feeling as well."
		}

	}

	handleChange(event) {
		this.setState.selection = event.target.value;

		const data = {
			type: UPDATE_HEARTLINE,
			option: this.dictHeart[event.target.value].option,
			description: this.dictHeart[event.target.value].description
		}
		this.props.updateLine(data);
	}

	render() {
		return (
			<div className="view">
				<div className="view__left">

					<h1>Reading the Heart Line</h1>
					<p>The heart line indicates your emotional stability and romantic relationships. Many believe this line only predicts your romantic love life, but Lenihan says that it can actually reveal how you deal with your emotions and how you approach all matters of the heart, whether with a significant other, friend, or family member.</p>
					<br />

					<form>
						<label className="selectHeader" for="heart"><b>Choose the option that best describes your Heart Line: </b></label>
						<br />
						<select className="dropdown" id="heartLine" name="heartLine" value={this.state.value} onChange={this.handleChange}>
							<option value="short">{this.dictHeart.short.option}</option>
							<option value="flat">{this.dictHeart.flat.option}</option>
							<option value="curveMid">{this.dictHeart.curveMid.option}</option>
							<option value="curveEdge">{this.dictHeart.curveEdge.option}</option>
							<option value="curveDown">{this.dictHeart.curveDown.option}</option>
						</select>
					</form>
					<br />
					<p className="reading"> {this.props.heartLine.description} </p>

				</div>

				<div className="view__right">
					<img className="hand" src={HeartLine} alt="illustration of a hand" />
				</div>
				
			</div>

		);
	}
}

const mapStateToProps = state => ({
	heartLine: state.heartLine
})

const mapDispatchToProps = dispatch => ({
	updateLine: data => dispatch (updateLine(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Heart);