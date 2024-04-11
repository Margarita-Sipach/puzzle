import { restartGame } from "./game";
import { sectionInit } from "./lib/section";

export const sizes = [
	{
		size: 3,
		text: '3x3',
		state: false,
	},
	{
		size: 4,
		text: '4x4',
		state: true,
	},
	{
		size: 5,
		text: '5x5',
		state: false,
	},
	{
		size: 6,
		text: '6x6',
		state: false,
	},
	{
		size: 7,
		text: '7x7',
		state: false,
	},
	{
		size: 8,
		text: '8x8',
		state: false,
	},
]


export const sizesInit = () => {
	const section = sectionInit('sizes')

	sizes.forEach(item => {
		let size = document.createElement('div');
		size.classList.add('sizes__item', 'size');
		item.state && size.classList.add('active');
		size.textContent = item.text;
		section.append(size);
	})

	document.querySelectorAll('.size').forEach((item, index) => item.addEventListener('click', () => chooseSize(sizes, index)))
}

const chooseSize = (sizes: any[], index: number) => {
	sizes.forEach(item => item.state = false);
	document.querySelectorAll('.size').forEach(item => item.classList.remove('active'));

	sizes[index].state = true;
	document.querySelectorAll('.size')[index].classList.add('active');

	restartGame();
}

