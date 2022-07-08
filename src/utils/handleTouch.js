import anime from 'animejs'

function handleMoveTouch(e, elem) {
	let moveX = Number(elem.dataset.x) - e.touches[0].pageX
	if (moveX > 130) {
		moveX = 130
	}
	if (moveX < -130) {
		moveX = -130
	}
	elem.dataset.move = moveX
	anime({
		targets: elem,
		translateX: -Number(elem.dataset.move),
		duration: 300,
	})
}
function handleEndTouch(elem) {
	if (elem.dataset.move > 100) {
		elem.dataset.move = 100
	} else if (elem.dataset.move < -100) {
		elem.dataset.move = -100
	} else {
		elem.dataset.move = 0
	}
	const swipes = document.querySelectorAll('.swipe') || []
	swipes.forEach((item) => {
		if (item.querySelector('.task__body') === elem) {
			return
		}
		item.querySelector('.task__body').dataset.move = 0
		item.querySelector('.task__body').dataset.x = 0
		anime({
			targets: item.querySelector('.task__body'),
			translateX: 0,
		})
	})
	setTimeout(() => {
		anime({
			targets: elem,
			translateX: -Number(elem.dataset.move),
		})
	}, 1)
}
function handleStartTouch(e, elem) {
	elem.dataset.x = Number(e.touches[0].pageX) + Number(elem.dataset.move || 0)
}

export { handleStartTouch, handleMoveTouch, handleEndTouch }
