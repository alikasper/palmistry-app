import React, { Component } from 'react';
import LifeLine from './images/life_line.png';

class Life extends Component {
	render() {
		return (
			<div className="view">

				<div className="view__left">

					<h1>Reading the Life Line</h1>
					<p>The life line indicates general well-being, physical health, and major life changes. It indicates your health and the path your life will take. But, contrary to popular belief, it does not dictate when you'll die.</p>
					<br />

					<form>
						<label for="life_line_length"><b>Choose the option that best describes your Life Line:</b></label>
						<br />
						<select className="dropdown" id="life_line_length" name="life_line_length">
							<option value="short">Short</option>
							<option value="round">Round and robust</option>
							<option value="splits">Splits about an inch above the wrist</option>
						</select>
						<button>Submit</button>
					</form>
				</div>

				<div className="view__right">
					<img className="hand" src={LifeLine} alt="illustration of a hand" />
				</div>

			</div>

		);
	}
}

export default Life;