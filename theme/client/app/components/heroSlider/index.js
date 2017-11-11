import React, { Component } from 'react';
import Slide from './slide';

class HeroSlider extends Component {

	state = {
		slide: 1
	}
	
	componentDidMount() {
		const total = this.props.slides.length;
		const { slide } = this.state;
		if(total > 0) {
			this.interval = setInterval(() => {
				this.setState({slide: slide < total ? slide + 1 : 1});
			}, 5000);
		}
	}

	render() {
		const { slides } = this.props;

		return (
			<section className="heroSlider">
				{slides.map((slide, i) => {
					return <Slide key={i} {...slide} />
				})}
				<style jsx>{`
					.heroSlider {
						min-height: 100vh
					}
				`}</style>
			</section>
		)
	}
}

export default HeroSlider;
