import { restartGame } from "./game";
import { sectionInit } from "./lib/section";

interface Button{
	class: string, 
	text: string,
	state: boolean
}

export const buttons = [
	{
		class: 'start-btn', 
		text: 'Restart',
		state: false
	},
	// {
	// 	class: 'stop-btn', 
	// 	text: 'Stop',
	// 	state: false
	// },
	// {
	// 	class: 'sound-btn', 
	// 	text: 'Sound',
	// 	state: true
	// },
	// {
	// 	class: 'results-btn', 
	// 	text: 'Results',
	// 	state: false
	// },
	// {
	// 	class: 'easy-btn', 
	// 	text: 'Easy level',
	// 	state: false
	// }
]

export const buttonsInit = () => {
	const section = sectionInit('buttons')
	buttons.forEach(createButton(section))

	section.addEventListener('click', (e) => {
		const target = e.target as HTMLElement;
		if(target?.classList.contains('button') && !target?.classList.contains('active')) clickOnButton(e)
	})
}

const createButton = (section: HTMLElement) => (item: Button) => {
	let button = document.createElement('button');
	button.classList.add('button', 'buttons__item', item.class);
	item.state && button.classList.add('active');
	button.textContent = item.text;
	section.append(button);
	return
}

const clickOnButton = (e: MouseEvent) => {
	const activeItem = e.target as HTMLElement;
	activeItem.classList.toggle('active');

	if(activeItem.classList.contains('start-btn')) clickOnStartBtn();
	// if(activeItem.classList.contains('stop-btn')) clickOnStopBtn();
	// if(activeItem.classList.contains('results-btn')) clickOnResultBtn();
	// if(activeItem.classList.contains('easy-btn')) clickOnEasyBtn();
}

const clickOnStartBtn = () => {
	// gameInit();
	restartGame()
}

// const clickOnStopBtn = () => {
// 	// localStorage.setItem('game', )
// }

// const clickOnResultBtn = () => {
// 	const bg = document.querySelector('.bg_results')!,
// 			results = document.querySelector('.results')!,
// 			raiting = document.querySelector('.raiting__content')!;
// 	const raitingItems = localStorage.getItem('raiting') || [];

// 	bg.classList.add('active');
// 	results.classList.add('active');

// 	raiting.innerHTML = '';

// 	raitingItems.sort((a, b) => a[1] - b[1] ? a[1] - b[1] : 0);
// 	raitingItems.forEach((item, index) => {
// 		const	raitingItem = `<div class="raiting__item">
// 										<div class="raiting__number">${++index}</div>
// 										<div class="raiting__move">${item[1]}</div>
// 										<div class="raiting__time">${item[0]}</div>
// 									</div>`;

// 		raiting.insertAdjacentHTML('beforeend', raitingItem);
// 	})

// 	const n = raitingItems.length < 20 ? raitingItems.length : 20;
// 	let index = 1;
// 	for(let i = 0; i < n; i = i + 2){
		
			
// 		index++;
// 	}
// }

// const clickOnEasyBtn = (e) => {
// 	restartGame()
// }