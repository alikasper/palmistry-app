import React, { Component } from 'react';
import HeadLine from './images/head_line.png';

class Head extends Component {
	render() {
		return (
			<div className="view">

				<div className="view__left">

					<h1>Reading the Head Line</h1>
					<p>Your head line (also known as your wisdom line) represents all things mental – your intelligence, intuition, the strength of your will, and it can even show how you receive and react to information.</p>
					<br />

					<form>
						<label for="head_line_length"><b>Choose the option that best describes your Head Line: </b></label>
						<br />
						<select className="dropdown" id="head_line_length" name="head_line_length">
							<option value="short">Short</option>
							<option value="long">Long</option>
						</select>
						<button>Submit</button>
					</form>
				</div>

				<div className="view__right">
					<img className="hand" src={HeadLine} alt="illustration of a hand" />
				</div>

			</div>
		);
	}
}

export default Head;