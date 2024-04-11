import { wrapper } from "../wrapper";

export const sectionInit = (title: string) => {
    const section = document.createElement('section');
    section.classList.add(title);
    wrapper().append(section);
    return section
} 