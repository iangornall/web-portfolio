var projectList = document.querySelector('.projects-list');

projectData.forEach((project, index) => {
  var tile = document.createElement('div');
  tile.classList.add('tile');
  var figure = document.createElement('figure');
  var image = document.createElement('img');
  image.classList.add('tile-image');
  image.setAttribute('src', project.thumbnail);
  image.setAttribute('alt', project.name);
  figure.appendChild(image);
  var caption = document.createElement('figcaption');
  caption.classList.add('tile-caption');
  caption.textContent = project.name;
  figure.appendChild(caption);
  tile.appendChild(figure);

  tile.addEventListener('click', () => {
    showModal(index);
  });

  projectList.appendChild(tile);
});