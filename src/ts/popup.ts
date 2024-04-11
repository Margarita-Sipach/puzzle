

export const createPopups = () => {
	const popup = `<div class="bg bg_results">
									<div class="popup">
										<div class="popup__content results">
											<div class="popup__close">x</div>
											<div class="popup__title">Results</div>
											<div class="popup__raiting raiting">
												<div class="raiting__item raiting__item_title">
													<div class="raiting__number">Number</div>
													<div class="raiting__move">Move</div>
													<div class="raiting__time">Time</div>
												</div>
												<div class="raiting__content"></div>
											</div>
										</div>
									</div>
									</div>
									<div class="bg bg_win">
									<div class="popup">
										<div class="popup__content win">
											<div class="popup__close win__close">x</div>
											<div class="popup__title win__title"></div>							
										</div>
									</div>
								</div>`;

	document.body.insertAdjacentHTML('beforeend', popup);

	const bg = document.querySelectorAll('.bg'),
			close = document.querySelectorAll('.popup__close'),
			popupContent = document.querySelectorAll('.popup__content');

	close.forEach(item => item.addEventListener('click', () => {
		bg.forEach(item => item.classList.remove('active'));
		popupContent.forEach(item => item.classList.remove('active'));
	}))
}
