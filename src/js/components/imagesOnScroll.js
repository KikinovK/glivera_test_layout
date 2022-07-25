import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/scss/scrollbar';
import buildSliders from './buildSliders';

const imagesOnScroll = () => {
	const sliderClass = '.imagesOnScroll';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			speed: 800,
			// loop: true,
			scrollbar: {
				el: '.imagesOnScrollScrollbar',
				draggable: true,
				snapOnRelease: true,
				dragClass: 'imagesOnScrollDrag',
			},

			breakpoints: {
				320: {
					slidesPerView: 'auto',
				},
				480: {
					slidesPerView: 'auto',
				},
				1023: {
					slidesPerView: 'auto',
				},
			},

		});
	}
};

export default imagesOnScroll;
