import React, { Component } from 'react';
import Sun from './icons/sun.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
		<div className="weather_widget">
			<div className="day" id="monday">
				<p className="name">Mon</p>
        <img src={ Sun } alt="Sunny" />
				<p className="high">78&#176;</p>
				<span className="low">52&#176;</span>
			</div>


			<div className="day" id="tuesday">
				<p className="name">Tue</p>
        <img src={ Sun } alt="Sunny" />
				<p className="high">78&#176;</p>
				<span className="low">52&#176;</span>
			</div>

			<div className="day" id="wednesday">
				<p className="name">Wed</p>
        <img src={ Sun } alt="Sunny" />
				<p className="high">78&#176;</p>
				<span className="low">52&#176;</span>
			</div>

			<div className="day" id="thursday">
				<p className="name">Thu</p>
        <img src={ Sun } alt="Sunny" />
				<p className="high">78&#176;</p>
				<span className="low">52&#176;</span>
			</div>

			<div className="day" id="friday">
				<p className="name">Fri</p>
        <img src={ Sun } alt="Sunny" />
				<p className="high">78&#176;</p>
				<span className="low">52&#176;</span>
			</div>
		</div>

	</div>
    );
  }
}

export default App;
