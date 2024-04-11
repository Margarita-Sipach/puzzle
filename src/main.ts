import { APP } from "./const.js";
import './scss/style.scss'
<<<<<<< HEAD
import { wrapper } from "./ts/wrapper.ts";
=======
import { wrapper, wrapperInit } from "./ts/wrapper.ts";
>>>>>>> 294b82cf182ab746698409b948944fdd4d98226e
import { buttonsInit } from "./ts/button.ts";
import { tagsInit } from "./ts/tag.ts";
import { createPopups } from "./ts/popup.ts";
import { statisticsInit } from "./ts/statistics.ts";
import { sizesInit } from "./ts/size.ts";
//Init

const gameInit = () => {

	APP.innerHTML = ''

	wrapper().insertAdjacentHTML("beforeend", '<h1>15-puzzle</h1>');
  
	buttonsInit();
	statisticsInit();
	tagsInit();
	sizesInit();	
	// timeCounter();
	createPopups();	 
}

gameInit()

//