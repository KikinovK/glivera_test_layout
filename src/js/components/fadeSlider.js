import Swiper, { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import buildSliders from './buildSliders';

const fadeSlider = () => {
	const sliderClass = '.fadeSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, EffectFade],
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			speed: 800,
			// loop: true,
			navigation: {
				prevEl: '.fadeSliderSliderArrowNext',
				nextEl: '.fadeSliderSliderArrowPrev',
				disabledClass: 'fade__nav_btn--disabled',
			},
		});
	}
};

export default fadeSlider;
