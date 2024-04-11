import { statisticsInit } from "./statistics"
import { tagsInit } from "./tag";

export const restartGame = () => {
	document.querySelector('.start-btn')?.classList.remove('active')
	document.querySelector('.easy-btn')?.classList.remove('active')
	tagsInit()
	statisticsInit()
}