import { projects } from './projects';

const portfolioSection = document.getElementById('portfolio');

projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>Languages: ${project.languages.join(', ')}</p>
        <p>Author: ${project.author}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    portfolioSection.appendChild(projectDiv);
});
