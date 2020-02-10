const bell = document.querySelector('.hotel-bell');
const bellTwo = document.querySelector('.hotel-bell-2');

	bell.onmouseover = () => {
		bell.classList.add('animated', 'wobble', 'infinite');
	};

	bell.onmouseout = () => {
		bell.classList.remove('animated', 'wobble', 'infinite');
	};

// Second bell
	bellTwo.onmouseover = () => {
		bellTwo.classList.add('animated', 'wobble', 'infinite');
	};

	bellTwo.onmouseout = () => {
		bellTwo.classList.remove('animated', 'wobble', 'infinite');
	};