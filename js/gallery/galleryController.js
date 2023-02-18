'use strict'

// A function which renders the gallery
function renderGallery() {
  var imgs = getImg()
  console.log(imgs)
  var strHTML = ''
  for (let i = 0; i < imgs.length; i++) {
    strHTML += `<img src="imgs-square/${imgs[i].id}.jpg" 
      class="gallery-img" onclick="onImgSelect('${imgs[i].id}')">`
  }

  console.log(strHTML)
  var elGContainer = document.querySelector('.gallery-container')
  elGContainer.innerHTML = strHTML
}

// A function which been called by the DOM and renders the right image
function onImgSelect(imgId) {
  setImg(imgId)
  document.querySelector('.editor-layout').classList.remove('hidden')
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.rand-meme').classList.add('hidden')
  renderMeme()
}


// A function which been called by the DOM and sets the filterBy
function onSetFilterBy(filterBy) {
  filterBy = setFilterBy(filterBy)
  renderGallery()
}
