var showModal = i => {
  var cover = document.querySelector('.cover');
  cover.classList.remove('hide');
  var modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('hide');
  var modals = document.querySelectorAll('.modal');
  modals[(i + 1) % projectData.length].classList.add('above');
  modals[i].classList.add('center');
  modals[i].classList.remove('hide');
  modals[(projectData.length + i - 1) % projectData.length].classList.add('below');
}

var hideModal = () => {
  var cover = document.querySelector('.cover');
  cover.classList.add('hide');
  var modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('hide');
  var modals = document.querySelectorAll('.modal');
  for (modal of modals) {
    modal.classList.add('hide');
    modal.classList.remove('center', 'above', 'below');
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
  if (!project.video) {
    modalImageContainer.appendChild(modalImage);
  } 
  else {
    var modalVideo = document.createElement('iframe');
    modalVideo.setAttribute('width', '100%');
    modalVideo.setAttribute('height', '100%');
    modalVideo.setAttribute('frameborder', '0');
    modalVideo.setAttribute('allowfullscreen', true);
    modalVideo.setAttribute('src', project.video);
    modalVideo.appendChild(modalImage);
    modalImageContainer.appendChild(modalVideo);
  }
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
    modalLink.setAttribute('target', '_blank');
    modalLinks.appendChild(modalLink);
  }
  modalTextContainer.appendChild(modalLinks);

  var modalDevIconContainer = document.createElement('div');
  modalDevIconContainer.classList.add('modal-devIcon-container');

  for (let devIcon of project.devicons){
    var devIconBox = document.createElement('div');
    devIconBox.classList.add('dev-icon-box');
    var devIconElement = document.createElement('i');
    devIconElement.classList.add(devicons[devIcon].icon, 'dev-icon');
    devIconBox.appendChild(devIconElement);
    var devIconText = document.createElement('p');
    devIconText.textContent = devicons[devIcon].text;
    devIconText.classList.add('dev-icon-text')
    devIconBox.appendChild(devIconText);
    modalDevIconContainer.appendChild(devIconBox);
  }

  modalTextContainer.appendChild(modalDevIconContainer);

  var modalDescription = document.createElement('div');
  modalDescription.classList.add('modal-description');

  for (let paragraph of project.description) {
    var modalParagraph = document.createElement('p');
    modalParagraph.textContent = paragraph;
    modalDescription.appendChild(modalParagraph);
  }
  modalTextContainer.appendChild(modalDescription);

  if (project.list) {
    var modalResList = document.createElement('ul');
    modalResList.classList.add('modal-list');
    for (let listItem of project.list) {
      var modalResItem = document.createElement('li');
      modalResItem.classList.add('modal-item');
      modalResItem.textContent = listItem;
      modalResList.appendChild(modalResItem);
    }
    modalTextContainer.appendChild(modalResList);
  }

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

  var modalCloseContainer = document.createElement('div');
  modalCloseContainer.classList.add('modal-close');
  var modalClose = document.createElement('i');
  modalClose.classList.add('fas', 'fa-times');
  modalCloseContainer.appendChild(modalClose);
  modal.appendChild(modalCloseContainer);

  modalUpArrowContainer.addEventListener('click', () => {
    hideModal();
    showModal((projectData.length + index - 1) % projectData.length);
  });

  modalDownArrowContainer.addEventListener('click', () => {
    hideModal();
    showModal((index + 1) % projectData.length);
  });

  modalCloseContainer.addEventListener('click', hideModal)

  modalContainer.appendChild(modal);
});

var modals = document.querySelectorAll('.modal');