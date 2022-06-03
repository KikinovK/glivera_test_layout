import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/scss/scrollbar';
import buildSliders from './buildSliders';

const accountsSlider = () => {
	const sliderClass = '.accountsSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			speed: 800,
			// loop: true,
			scrollbar: {
				el: '.accountsScrollbar',
				draggable: true,
				// snapOnRelease: true,
				dragClass: 'accountsDrag',
				dragSize: 100,
			},
			navigation: {
				prevEl: '.accountsSliderArrowPrev',
				nextEl: '.accountsSliderArrowNext',
				disabledClass: 'btn--disabled',
			},
			pagination: {
				el: '.slider_dots',
				type: 'bullets',
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1023: {
					slidesPerView: 3.27,
				},
			},

		});
	}
};

export default accountsSlider;
