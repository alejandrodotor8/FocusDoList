import anime from './anime.es';

function handleMoveClick(e) {
	const el = e.target.parentElement;
	let moveX = Number(el.dataset.x) - e.pageX;
	if (moveX > 130) {
		moveX = 130;
	}
	if (moveX < -130) {
		moveX = -130;
	}
	el.dataset.move = moveX;
	anime({
		targets: el,
		translateX: -Number(el.dataset.move),
		duration: 300,
	});
}
function handleEndClick(e, elem) {
	const el = e.target.parentElement;
	if (el.dataset.move > 100) {
		el.dataset.move = 100;
	} else if (el.dataset.move < -100) {
		el.dataset.move = -100;
	} else {
		el.dataset.move = 0;
	}
	const swipes = document.querySelectorAll('.swipe') || [];
	swipes.forEach((item) => {
		if (item.querySelector('.task__body') === el) {
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
			targets: el,
			translateX: -Number(el.dataset.move),
		});
		elem.removeEventListener('mousemove', handleMoveClick);
	}, 1);
}
function handleStartClick(e, id) {
	const el = e.target.parentElement;
	const elem = document.getElementById(id);
	elem.addEventListener('mousemove', handleMoveClick);
	elem.addEventListener('mouseup', (e) => handleEndClick(e, elem));

	el.dataset.x = Number(e.pageX) + Number(el.dataset.move || 0);
}

export default handleStartClick;
