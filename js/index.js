
let seeVideoSection = document.querySelector('.icon-play')
let modal = document.querySelector('.modal')
let barsIcon = document.querySelector('.bars-icon')
let modalBtn = document.querySelector('.modal-btn')
let responseList = document.querySelector('.responsive-list')
let headerResponseList = document.querySelector('.header-responsive-list-mini')
let rightBlockDiv = document.querySelector('.block-div-left')
let headerResponseListFirst = document.querySelector('.header-responsive-list-mini-first')
let rightBlockDivCenter = document.querySelector('.block-div-center')
let headerResponseListTwo = document.querySelector('.header-responsive-list-mini-two')
let rightBlockDivRight = document.querySelector('.block-div-right')

seeVideoSection.addEventListener('click', () => {
    modal.style.display = 'block'
})
modalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    window.location.reload()
})
barsIcon.addEventListener('click', () => {
    if(barsIcon.classList.contains('bar')) {
        responseList.style.top = '-800px'
        barsIcon.classList.remove('bar')
    }else {
        responseList.style.top = '39px'
        barsIcon.classList.add('bar')
    }
})
rightBlockDiv.addEventListener('click', () => {
    if(rightBlockDiv.classList.contains('bar')) {
        headerResponseList.style.display = 'none'
        rightBlockDiv.classList.remove('bar')
    }else {
        headerResponseList.style.display = 'block'
        rightBlockDiv.classList.add('bar')
    }
})
rightBlockDivCenter.addEventListener('click', () => {
    if(rightBlockDivCenter.classList.contains('bar')) {
        headerResponseListFirst.style.display = 'none'
        rightBlockDivCenter.classList.remove('bar')
    }else {
        headerResponseListFirst.style.display = 'block'
        rightBlockDivCenter.classList.add('bar')
    }
})
rightBlockDivRight.addEventListener('click', () => {
    if(rightBlockDivRight.classList.contains('bar')) {
        headerResponseListTwo.style.display = 'none'
        rightBlockDivRight.classList.remove('bar')
    }else {
        headerResponseListTwo.style.display = 'block'
        rightBlockDivRight.classList.add('bar')
    }
})