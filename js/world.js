let educatorList = document.querySelector('.educator-list')
const adminList = document.querySelector('.admin-list')
const devList = document.querySelector('.dev-list')
const partnerList = document.querySelector('.partner-list')
let modal = document.querySelector('.modal')
let iframeVideo = document.querySelector('.world-iframe-video')
let modalBtn = document.querySelector('.modal-btn')
import {educationData} from './educators.js';
import {developerData} from './developers.js';
import {administratorsData} from './admnistrators.js';
import {partnersData} from './partners.js';
import {allData} from './allData.js';

educationData.forEach(elem => {
    let newLi = document.createElement('li')
    let newPoster = document.createElement('img')
    let newTitle = document.createElement('h1')
    let newSection = document.createElement('div')
    let newIcon = document.createElement('i')
    
    newSection.setAttribute('class', 'section-play')
    newIcon.setAttribute('class', 'world-play-icon fa-solid fa-play')
    newIcon.setAttribute('data-id', elem.dataId)
    newPoster.setAttribute('class', 'world-poster')
    newTitle.setAttribute('class', 'world-list-title')
    newLi.setAttribute('class', 'world-item')
    
    newPoster.src = elem.poster;
    newTitle.textContent = elem.title;
    
    newIcon.addEventListener('click', (e) => {
        window.localStorage.setItem('iframeId', e.target.dataset.id)
        const windowData = window.localStorage.getItem('iframeId')
        let findData = allData.find(elem => elem.dataId == windowData)
        iframeVideo.src = findData.video;
        modal.style.display = 'block'
    })
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        window.location.reload()
    })
    
    newSection.appendChild(newIcon)
    newLi.appendChild(newPoster)
    newLi.appendChild(newSection)
    newLi.appendChild(newTitle)
    educatorList.appendChild(newLi)
})
administratorsData.forEach(elem => {
    let newLi = document.createElement('li')
    let newPoster = document.createElement('img')
    let newTitle = document.createElement('h1')
    let newSection = document.createElement('div')
    let newIcon = document.createElement('i')
    
    newPoster.setAttribute('class', 'world-poster')
    newTitle.setAttribute('class', 'world-list-title')
    newLi.setAttribute('class', 'world-item')
    newSection.setAttribute('class', 'section-play')
    newIcon.setAttribute('class', 'world-play-icon fa-solid fa-play')
    newIcon.setAttribute('data-id', elem.dataId)
    
    newIcon.addEventListener('click', (e) => {
        window.localStorage.setItem('iframeId', e.target.dataset.id)
        const windowData = window.localStorage.getItem('iframeId')
        let findData = allData.find(elem => elem.dataId == windowData)
        iframeVideo.src = findData.video;
        modal.style.display = 'block'
    })
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        window.location.reload()
    })
    
    newPoster.src = elem.poster;
    newTitle.textContent = elem.title;
    
    newSection.appendChild(newIcon)
    newLi.appendChild(newSection)
    newLi.appendChild(newPoster)
    newLi.appendChild(newTitle)
    adminList.appendChild(newLi)
})
partnersData.forEach(elem => {
    let newLi = document.createElement('li')
    let newPoster = document.createElement('img')
    let newTitle = document.createElement('h1')
    let newSection = document.createElement('div')
    let newIcon = document.createElement('i')
    
    newPoster.setAttribute('class', 'world-poster')
    newTitle.setAttribute('class', 'world-list-title')
    newLi.setAttribute('class', 'world-item')
    newSection.setAttribute('class', 'section-play')
    newIcon.setAttribute('class', 'world-play-icon fa-solid fa-play')
    newIcon.setAttribute('data-id', elem.dataId)
    
    newIcon.addEventListener('click', (e) => {
        window.localStorage.setItem('iframeId', e.target.dataset.id)
        const windowData = window.localStorage.getItem('iframeId')
        let findData = allData.find(elem => elem.dataId == windowData)
        iframeVideo.src = findData.video;
        modal.style.display = 'block'
    })
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        window.location.reload()
    })
    
    newPoster.src = elem.poster;
    newTitle.textContent = elem.title;
    
    newSection.appendChild(newIcon)
    newLi.appendChild(newSection)
    newLi.appendChild(newPoster)
    newLi.appendChild(newTitle)
    partnerList.appendChild(newLi)
})
developerData.forEach(elem => {
    let newLi = document.createElement('li')
    let newPoster = document.createElement('img')
    let newTitle = document.createElement('h1')
    let newSection = document.createElement('div')
    let newIcon = document.createElement('i')
    
    newPoster.setAttribute('class', 'world-poster')
    newTitle.setAttribute('class', 'world-list-title')
    newLi.setAttribute('class', 'world-item')
    newSection.setAttribute('class', 'section-play')
    newIcon.setAttribute('class', 'world-play-icon fa-solid fa-play')
    newIcon.setAttribute('data-id', elem.dataId)
    
    newIcon.addEventListener('click', (e) => {
        window.localStorage.setItem('iframeId', e.target.dataset.id)
        const windowData = window.localStorage.getItem('iframeId')
        let findData = allData.find(elem => elem.dataId == windowData)
        iframeVideo.src = findData.video;
        modal.style.display = 'block'
    })
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        window.location.reload()
    })
    
    newPoster.src = elem.poster;
    newTitle.textContent = elem.title;
    
    newSection.appendChild(newIcon)
    newLi.appendChild(newSection)
    newLi.appendChild(newPoster)
    newLi.appendChild(newTitle)
    devList.appendChild(newLi)
})

