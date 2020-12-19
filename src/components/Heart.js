import React, { Component } from 'react';
import HeartLine from './images/heart_line.png';

class Heart extends Component {
	render() {
		return (
			<div className="view">
				<div className="view__left">

					<h1>Reading the Heart Line</h1>
					<p>The heart line indicates your emotional stability and romantic relationships. Many believe this line only predicts your romantic love life, but Lenihan says that it can actually reveal how you deal with your emotions and how you approach all matters of the heart, whether with a significant other, friend, or family member.</p>
					<br />

					<form>
						<label for="heart_line_length"><b>Choose the option that best describes your Heart Line: </b></label>
						<br />
						<select className="dropdown" id="heart_line_length" name="heart_line_length">
							<option value="short">Short line with no curve</option>
							<option value="flat">More flat than curved</option>
							<option value="curve_mid_fing">Curves dramatically toward middle finger</option>
							<option value="curve_edge_palm">Curves up from edge under pinky toward index finger</option>
						</select>
						<button>Submit</button>
					</form>

				</div>

				<div className="view__right">
					<img className="hand" src={HeartLine} alt="illustration of a hand" />
				</div>
				
			</div>

		);
	}
}

export default Heart;