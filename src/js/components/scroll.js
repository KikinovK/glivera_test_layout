const scroll = () => {
	console.log('scroll');
	const btnScroll = document.querySelector('.btnScroll');
	const footer = document.querySelector('.footer');
	const getVh = () => {
		return document.documentElement.clientHeight;
	};
	const scrollTo = (coord) => {
		window.scroll({
			top: coord,
			behavior: 'smooth',
		});
	};
	const getCoord = () => {
		const vh = getVh();
		return window.scrollY + vh - (window.scrollY % vh);
	};
	const hendlerBtnScroll = () => {
		const coord = getCoord();

		scrollTo(coord);
	};
	const hendlerScroll = () => {
		const vh = getVh();

		if (window.scrollY + vh > document.body.scrollHeight - footer.clientHeight) {
			btnScroll.classList.add('btn--hiden');
		} else {
			btnScroll.classList.remove('btn--hiden');
		}
	};

	btnScroll.addEventListener('click', hendlerBtnScroll);

	window.addEventListener('scroll', hendlerScroll);
};

export default scroll;
