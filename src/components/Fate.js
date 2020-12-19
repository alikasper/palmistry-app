import React, { Component } from 'react';
import FateLine from './images/fate_line.png';

class Fate extends Component {
	render() {
		return (
			
			<div className="view">

			<div className="view__left">

				<h1>Reading the Fate Line</h1>
				<p>The fate line indicates how much of your life is affected by circumstances beyond your control. It represents what may influence your path in life, from your career to your personal choices to your ancestry.</p>
				<br />

				<form>
					<label for="fate_line_length"><b>Choose the option that best describes your Fate Line: </b></label>
					<br />
					<select className="dropdown" id="fate_line_length" name="fate_line_length">
						<option value="breaks">Breaks in the line</option>
						<option value="Double">Double line</option>
					</select>
					<button>Submit</button>
				</form>
			</div>

			<div className="view__right">
				<img className="hand" src={FateLine} alt="illustration of a hand" />
			</div>

			</div>
		);
	}
}

export default Fate;