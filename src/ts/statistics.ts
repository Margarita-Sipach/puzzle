import { sectionInit } from "./lib/section";

export const statisticsArray = [
	{
		text: 'Move',
	 	default: '0'
	},
	{
		text: 'Time',
	 	default: '00:00'
	}
]


export const statisticsInit = () => {
	const section = document.querySelector('.statistic') || sectionInit('statistic')
	section.innerHTML = ''

	statisticsArray.forEach(item => {
		const type = item.text.toLowerCase()
		const statistics = document.createElement('div');
		statistics.classList.add('statistics__item', type);
		statistics.textContent = `${item.text}: `;
		section.append(statistics);

		const statisticsText = document.createElement('span');
		statisticsText.classList.add(`${type}__text`);
		statisticsText.textContent = item.default;
		statistics.append(statisticsText);
	})

	startTime()
}

export const startMove = () => {
	const moveCount = document.querySelector('.move__text');
	moveCount && (moveCount.textContent = (moveCount?.textContent ? Number(moveCount?.textContent) + 1 : 0).toString());
}

export const startTime = () => {
	const timeCount = document.querySelector('.time__text');
	let sec = 0, min = 0;

	timeCount &&
	setInterval(() => {
		sec++;
		if(sec === 60){
			sec = 0;
			min++;
		}
		timeCount.textContent = `${standartTime(min)}:${standartTime(sec)}`;
	}, 1000);
}

const standartTime = (time: number) => String(time).padStart(2, '0')