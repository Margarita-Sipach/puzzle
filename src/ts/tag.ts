import { restartGame } from "./game";
import { sectionInit } from "./lib/section";
import { sizes } from "./size";
import { startMove } from "./statistics";

export const tagsInit = () => {
    const tagsRowCount = +(sizes.find(({state}) => state)?.size || 4);
    const tagsAllCount = tagsRowCount ** 2 - 1;
    const tagsCharacters: { tag: HTMLDivElement; left: number; top: number; value: number; }[] = [];
    const emptyTag = {left: tagsRowCount - 1, top: tagsRowCount - 1};

    const section = (document.querySelector('.tags') || sectionInit('tags')) as HTMLElement
    section.innerHTML = ''
    const tagSize = section.offsetWidth / tagsRowCount;

	const values = getSortedTagsValues(tagsAllCount)

	for(let i = 0; i < tagsAllCount; i++){
        const tag = createTag(i, values, section, tagsRowCount, tagSize)
		tagsCharacters.push(tag)
	}

	section.addEventListener('dragover', (e) => e.preventDefault());
	section.addEventListener('drop', (e) => moveItems((e.dataTransfer as any).getData('id'), tagSize, tagsCharacters, emptyTag, tagsRowCount))

	document.querySelectorAll('.tag').forEach((item, index) => {
		item.addEventListener('click', () => moveItems(index, tagSize, tagsCharacters, emptyTag, tagsRowCount));
		item.addEventListener('dragstart', (e) => {
			(e as any).dataTransfer.clearData();
			(e as any).dataTransfer.setData('id', (e.target as any).id)
		});
	});
}


const getSortedTagsValues = (amount: number) => {
  const values = Array.from({length: amount}).map((_, index) => ++index);

  let inv = 0;

  values.sort(() => Math.random() - 0.5);
  for(let i = 0; i < amount - 1; i++){
      for(let j = i + 1; j < amount; j++){
          values[i] > values[j] && inv++;
      }
  }

  inv % 2 !== 0 && ([values[amount - 1], values[amount - 2]] = [values[amount - 2], values[amount - 1]])

  return values
}

const createTag = (i: number, values: number[], section: HTMLElement, tagsRowCount: number, tagSize: number) => { 
    let tag = document.createElement('div');
    tag.classList.add('tags__item', 'tag');
    tag.draggable = true;
    tag.id = `${i}`;
    tag.textContent = `${values[i]}`;

    let left = (i % tagsRowCount);
    let top = ((i - left) / tagsRowCount);
    
    tag.style.left = `${left * tagSize + 5}px`;
    tag.style.top = `${top * tagSize + 5}px`;

    tag.style.width = `calc(${100 / tagsRowCount}% - 10px)`;
    tag.style.height = `calc(${100 / tagsRowCount}% - 10px)`;
    section.append(tag);

    return {tag: tag, left: left, top: top, value: values[i]}
}


const moveItems = (index: number, tagSize: number, tagsArray: any[], empty: { left: number; top: number; }, tagsCount: number) => {

	if(Math.abs(tagsArray[index].left - empty.left) + Math.abs(tagsArray[index].top - empty.top) > 1) return;

	const newLeft = empty.left,
		  newTop = empty.top;
			// audio = new Audio('./assets/sounds/tag_sound.mp3'),
			// button = document.querySelector('.sound-btn');

	empty.left = tagsArray[index].left;
	empty.top = tagsArray[index].top;

	tagsArray[index].left = newLeft;
	tagsArray[index].top = newTop;

	// if(button.classList.contains('active')) {
	// 	audio.play();
	// }
	
	tagsArray[index].tag.style.left = `${newLeft * tagSize + 5}px`;
	tagsArray[index].tag.style.top = `${newTop * tagSize + 5}px`;

    startMove()

	if(tagsArray.every(item => item.value === item.left + item.top * tagsCount + 1)) {
		openWin();
	}
}

const openWin = () => {
	const bg = document.querySelector('.bg_win')!,
			win = document.querySelector('.win')!,
			winTitle = document.querySelector('.win__title')!,
			close = document.querySelector('.win__close')!,
			move = (document.querySelector('.move__text') as HTMLElement).textContent!,
			time = (document.querySelector('.time__text') as HTMLElement).textContent!;

	bg.classList.add('active');
	win.classList.add('active');
	winTitle.textContent = `Hooray! You solved the puzzle in ${time} and ${move} moves!`;
	close.addEventListener('click', restartGame)

	addWinner(time, move);
}

const addWinner = (time: string, move: string) => {
	let raiting = localStorage.getItem('raiting') && JSON.parse(localStorage.getItem('raiting') || '');
	raiting.push([time, move]);
	localStorage.setItem('raiting', JSON.stringify(raiting));
}