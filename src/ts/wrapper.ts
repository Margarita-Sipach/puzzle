import { APP } from "../const";

export const wrapperInit = () => {
	console.log(APP)
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	APP.append(wrapper);
	return wrapper;
}

export const wrapper = () => document.querySelector('.wrapper') || wrapperInit();