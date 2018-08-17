var devicons = {
  python: 'devicon-python-plain'
}

var showModal = i => {
  var cover = document.querySelector('.cover');
  cover.classList.remove('hide');
  var modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('hide');
  var modals = document.querySelectorAll('.modal');
  modals[i].classList.remove('hide');
}

var hideModal = () => {
  var cover = document.querySelector('.cover');
  cover.classList.add('hide');
  var modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('hide');
  var modals = document.querySelectorAll('.modal');
  for (modal of modals) {
    modal.classList.add('hide');
  }
}

var cover = document.querySelector('.cover')
cover.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    hideModal();
  }
})

var modalContainer = document.querySelector('.modal-container');

projectData.forEach((project, index) => {
  var modal = document.createElement('div');
  modal.classList.add('modal', 'hide');

  var modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('modal-image-container');

  var modalImage = document.createElement('img');
  modalImage.classList.add('modal-image');
  modalImage.setAttribute('src', project.image);
  modalImageContainer.appendChild(modalImage);
  modal.appendChild(modalImageContainer);

  var modalTextContainer = document.createElement('div');
  modalTextContainer.classList.add('modal-text-container');
  
  var modalName = document.createElement('h2');
  modalName.classList.add('modal-name');
  modalName.textContent = project.name;
  modalTextContainer.appendChild(modalName);

  var modalLinks = document.createElement('div');
  modalLinks.classList.add('modal-links');
  for (link of project.links) {
    var modalLink = document.createElement('a');
    modalLink.classList.add('modal-link');
    modalLink.textContent = link.name;
    modalLink.setAttribute('href', link.src);
    modalLinks.appendChild(modalLink);
  }
  modalTextContainer.appendChild(modalLinks);

  var modalDescription = document.createElement('div');
  modalDescription.classList.add('modal-description');
  modalDescription.textContent = project.description;
  modalTextContainer.appendChild(modalDescription);

  var modalDevIconContainer = document.createElement('div');
  modalDevIconContainer.classList.add('modal-devIcon-container');

  for (devIcon of project.devicons){
    var devIconElement = document.createElement('i');
    devIconElement.classList.add(devicons[devIcon])
    modalDevIconContainer.appendChild(devIconElement);
  }

  modalTextContainer.appendChild(modalDevIconContainer);

  modal.appendChild(modalTextContainer);

  var modalUpArrowContainer = document.createElement('div');
  modalUpArrowContainer.classList.add('modal-up');
  var modalUp = document.createElement('i');
  modalUp.classList.add('fas', 'fa-arrow-up');
  modalUpArrowContainer.appendChild(modalUp);
  modal.appendChild(modalUpArrowContainer);

  var modalDownArrowContainer = document.createElement('div');
  modalDownArrowContainer.classList.add('modal-down');
  var modalDown = document.createElement('i');
  modalDown.classList.add('fas', 'fa-arrow-down');
  modalDownArrowContainer.appendChild(modalDown);
  modal.appendChild(modalDownArrowContainer);

  modalUpArrowContainer.addEventListener('click', () => {
    hideModal();
    showModal((projectData.length + index - 1) % projectData.length);
  });

  modalDownArrowContainer.addEventListener('click', () => {
    hideModal();
    showModal((index + 1) % projectData.length);
  });

  modalContainer.appendChild(modal);
});

var modals = document.querySelectorAll('.modal');

console.log(modals);