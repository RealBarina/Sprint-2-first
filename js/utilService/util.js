'use strict'

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}



// function onFilterGallery(value) {
//     console.log('value', value)
//     gImgs.forEach((img, idx) => {
//       console.log(gImgs[idx].keyword)
//       if (gImgs[idx].keyword.includes('value')) {
//         img.style.display = 'block'
//       } else {
//         img.style.display = 'none'
//       }
//     })
//   }
  
//   function getFilterdImgs(value) {
//     var imgs = gImgs.filter((img) => img.keyword.includes(value))
//     // gMeme[selectedImgId].splice(selectedImgId)
//     console.log(imgs)
//     // saveToStorage('FilterdImgs', imgs)
//     return imgs
//   }
  
//   function saveFilterdImgs() {
//     var img = getImg()
//     saveToStorage('FilterdImgs', img)
//   }
  

// function onHideGallery() {
//   document.querySelector('.editor-layout').classList.remove('hidden')
//   document.querySelector('.gallery-container').classList.add('hidden')
//   document.querySelector('.rand-meme').classList.add('hidden')
// }