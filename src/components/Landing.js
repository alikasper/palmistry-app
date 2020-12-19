import React, { Component } from 'react';
import LandingPage from './images/landing-page.png';
import { createStore } from 'redux';

class Landing extends Component {
	render() {
		return (
			<div className="view">
                <div className="view__image">
                    <img className="headerImage" src={LandingPage} alt="illustration of a palm" />
                </div>

                <div className="view__intro">
                    <p>Palmistry (also known as chiromancy or chirosophy) allows you to gather insight into someone’s life path and personality by analyzing the characteristics of their hands, Saucedo explains. It’s kind of similar to astrology in that it is a tool of self reflection, but it’s not like gazing into a crystal ball to see how your entire life will play out.</p>
                    <p>“Contrary to popular belief, modern palm reading is not fortune telling, and does not predict when someone is going to die,” she says. You may be bummed to learn you won’t be able to use palm reading to predict the future, but it’s still a pretty interesting skill. And anyone can learn it—this isn’t a practice reserved solely for psychics, mystics, and palmistry experts. In fact, there are plenty of articles, guides, and books that you can learn from, making palm reading accessible to nearly anyone who’s interested.</p> 
                    <p>“I believe the magic is in our bodies, not in outside 'psychic' sources,” Saucedo says. “It is a visual art that can be learned and supported by ones intuition.”</p>
                </div>
            </div>
		);
	}
}

export default Landing;