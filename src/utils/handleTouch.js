import anime from './anime.es';

function handleMoveTouch(e) {
	let moveX = Number(e.target.dataset.x) - e.touches[0].pageX;
	if (moveX > 130) {
		moveX = 130;
	}
	if (moveX < -130) {
		moveX = -130;
	}
	e.target.dataset.move = moveX;
	anime({
		targets: e.target,
		translateX: -Number(e.target.dataset.move),
		duration: 300,
	});
}
function handleEndTouch(e) {
	if (e.target.dataset.move > 100) {
		e.target.dataset.move = 100;
	} else if (e.target.dataset.move < -100) {
		e.target.dataset.move = -100;
	} else {
		e.target.dataset.move = 0;
	}
	const swipes = document.querySelectorAll('.swipe') || [];
	swipes.forEach((item) => {
		if (item.querySelector('.task__body') === e.target) {
			return;
		}
		item.querySelector('.task__body').dataset.move = 0;
		item.querySelector('.task__body').dataset.x = 0;
		anime({
			targets: item.querySelector('.task__body'),
			translateX: 0,
		});
	});
	setTimeout(() => {
		anime({
			targets: e.target,
			translateX: -Number(e.target.dataset.move),
		});
	}, 1);
}
function handleStartTouch(e) {
	e.target.dataset.x = Number(e.touches[0].pageX) + Number(e.target.dataset.move || 0);
}

export { handleStartTouch, handleMoveTouch, handleEndTouch };
