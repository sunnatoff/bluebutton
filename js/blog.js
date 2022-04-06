let ul = document.querySelector('.c-tab-list')
let ul1 = document.querySelector('.c-tab-list1')
let ul2 = document.querySelector('.c-tab-list2')
let ul3 = document.querySelector('.c-tab-list3')
let ul4 = document.querySelector('.c-tab-list4')
let ul5 = document.querySelector('.c-tab-list5')
let divPagi = document.querySelector('pagination-container')
async function items() {
    fetch('https://big-blue-backend.herokuapp.com')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let findData = data.filter(e => e.author === "BigBlueButton Dev")
        console.log(findData);
        let findData1 = data.filter(e => e.author === "BigBlueUpdates")
        console.log(findData1);
        let findData2 = data.filter(e => e.author === "BigBlueLearning")
        console.log(findData2);
        // let findData3 = data.filter(e => e.author === "Master Class")
        // console.log(findData3);
       
        // let findData4 = data.filter(e => e.author === "BigBlueButton Release")
        // console.log(findData4);
        // let findData5 = data.filter(e => e.author === "Documentation")
        // console.log(findData5);
        data.map(elem =>{
            let elemLi = document.createElement('li')
            let elemDivImg = document.createElement('div')
            let elemImg = document.createElement('img')
            let elemDivInfo = document.createElement('div')
            let elemSpanLink = document.createElement('span')
            let elemSPanData = document.createElement('span')
            let elemH4 = document.createElement('h4')
            let elemPInfo = document.createElement('p')
            let elemP = document.createElement('p')
            
            elemLi.classList.add('c-tab-list-item')
            elemDivImg.classList.add('c-tab-item-img-box')
            elemDivInfo.classList.add('c-tab-item-info-box')
            elemSpanLink.classList.add('c-tab-item-text-links')
            elemP.classList.add('c-tab-item-text-link')
            elemSPanData.classList.add('c-tab-item-span-data')
            elemH4.classList.add('c-tab-item-info-title')
            elemPInfo.classList.add('c-tab-item-info-text')

            elemImg.setAttribute('src', elem.poster)
            elemSpanLink.textContent= elem.author
            elemSPanData.textContent = elem.release_date
            elemH4.textContent = elem.title
            elemPInfo.textContent = elem.mini_title

          

            elemDivImg.appendChild(elemImg)

            elemP.appendChild(elemSpanLink)
            elemP.appendChild(elemSPanData)
            elemDivInfo.appendChild(elemP)
            elemDivInfo.appendChild(elemH4)
            elemDivInfo.appendChild(elemPInfo)

            elemLi.appendChild(elemDivImg)
            elemLi.appendChild(elemDivInfo)



            ul.appendChild(elemLi)
            // divPagi.appendChild(ul)
        })
        findData.map(elem => {
            let elemLi1 = document.createElement('li')
            let elemDivImg1 = document.createElement('div')
            let elemImg1 = document.createElement('img')
            let elemDivInfo1 = document.createElement('div')
            let elemSpanLink1 = document.createElement('span')
            let elemSPanData1 = document.createElement('span')
            let elemH41 = document.createElement('h4')
            let elemPInfo1 = document.createElement('p')
            let elemP1 = document.createElement('p')
            
            elemLi1.classList.add('c-tab-list-item1')
            elemDivImg1.classList.add('c-tab-item-img-box1')
            elemDivInfo1.classList.add('c-tab-item-info-box1')
            elemSpanLink1.classList.add('c-tab-item-text-links1')
            elemP1.classList.add('c-tab-item-text-link1')
            elemSPanData1.classList.add('c-tab-item-span-data1')
            elemH41.classList.add('c-tab-item-info-title1')
            elemPInfo1.classList.add('c-tab-item-info-text1')

            elemImg1.setAttribute('src', elem.poster)
            elemSpanLink1.textContent= elem.author
            elemSPanData1.textContent = elem.release_date
            elemH41.textContent = elem.title
            elemPInfo1.textContent = elem.mini_title

          

            elemDivImg1.appendChild(elemImg1)

            elemP1.appendChild(elemSpanLink1)
            elemP1.appendChild(elemSPanData1)
            elemDivInfo1.appendChild(elemP1)
            elemDivInfo1.appendChild(elemH41)
            elemDivInfo1.appendChild(elemPInfo1)

            elemLi1.appendChild(elemDivImg1)
            elemLi1.appendChild(elemDivInfo1)



            ul1.appendChild(elemLi1)
        })
        findData1.map(elem => {
            let elemLi2 = document.createElement('li')
            let elemDivImg2 = document.createElement('div')
            let elemImg2= document.createElement('img')
            let elemDivInfo2 = document.createElement('div')
            let elemSpanLink2 = document.createElement('span')
            let elemSPanData2 = document.createElement('span')
            let elemH42 = document.createElement('h4')
            let elemPInfo2 = document.createElement('p')
            let elemP2 = document.createElement('p')
            
            elemLi2.classList.add('c-tab-list-item2')
            elemDivImg2.classList.add('c-tab-item-img-box2')
            elemDivInfo2.classList.add('c-tab-item-info-box2')
            elemSpanLink2.classList.add('c-tab-item-text-links2')
            elemP2.classList.add('c-tab-item-text-link2')
            elemSPanData2.classList.add('c-tab-item-span-data2')
            elemH42.classList.add('c-tab-item-info-title2')
            elemPInfo2.classList.add('c-tab-item-info-text2')

            elemImg2.setAttribute('src', elem.poster)
            elemSpanLink2.textContent= elem.author
            elemSPanData2.textContent = elem.release_date
            elemH42.textContent = elem.title
            elemPInfo2.textContent = elem.mini_title

          

            elemDivImg2.appendChild(elemImg2)

            elemP2.appendChild(elemSpanLink2)
            elemP2.appendChild(elemSPanData2)
            elemDivInfo2.appendChild(elemP2)
            elemDivInfo2.appendChild(elemH42)
            elemDivInfo2.appendChild(elemPInfo2)

            elemLi2.appendChild(elemDivImg2)
            elemLi2.appendChild(elemDivInfo2)



            ul2.appendChild(elemLi2)
        })
        findData2.map(elem => {
            let elemLi3 = document.createElement('li')
            let elemDivImg3= document.createElement('div')
            let elemImg3= document.createElement('img')
            let elemDivInfo3 = document.createElement('div')
            let elemSpanLink3 = document.createElement('span')
            let elemSPanData3 = document.createElement('span')
            let elemH43 = document.createElement('h4')
            let elemPInfo3= document.createElement('p')
            let elemP3 = document.createElement('p')
            
            elemLi3.classList.add('c-tab-list-item3')
            elemDivImg3.classList.add('c-tab-item-img-box3')
            elemDivInfo3.classList.add('c-tab-item-info-box3')
            elemSpanLink3.classList.add('c-tab-item-text-links3')
            elemP3.classList.add('c-tab-item-text-link3')
            elemSPanData3.classList.add('c-tab-item-span-data3')
            elemH43.classList.add('c-tab-item-info-title3')
            elemPInfo3.classList.add('c-tab-item-info-text3')

            elemImg3.setAttribute('src', elem.poster)
            elemSpanLink3.textContent= elem.author
            elemSPanData3.textContent = elem.release_date
            elemH43.textContent = elem.title
            elemPInfo3.textContent = elem.mini_title

          

            elemDivImg3.appendChild(elemImg3)

            elemP3.appendChild(elemSpanLink3)
            elemP3.appendChild(elemSPanData3)
            elemDivInfo3.appendChild(elemP3)
            elemDivInfo3.appendChild(elemH43)
            elemDivInfo3.appendChild(elemPInfo3)

            elemLi3.appendChild(elemDivImg3)
            elemLi3.appendChild(elemDivInfo3)



            ul3.appendChild(elemLi3)
        })
        findData2.map(elem => {
            let elemLi4 = document.createElement('li')
            let elemDivImg4= document.createElement('div')
            let elemImg4= document.createElement('img')
            let elemDivInfo4 = document.createElement('div')
            let elemSpanLink4 = document.createElement('span')
            let elemSPanData4 = document.createElement('span')
            let elemH44 = document.createElement('h4')
            let elemPInfo4= document.createElement('p')
            let elemP4 = document.createElement('p')
            
            elemLi4.classList.add('c-tab-list-item4')
            elemDivImg4.classList.add('c-tab-item-img-box4')
            elemDivInfo4.classList.add('c-tab-item-info-box4')
            elemSpanLink4.classList.add('c-tab-item-text-links4')
            elemP4.classList.add('c-tab-item-text-link4')
            elemSPanData4.classList.add('c-tab-item-span-data4')
            elemH44.classList.add('c-tab-item-info-title4')
            elemPInfo4.classList.add('c-tab-item-info-text4')

            elemImg4.setAttribute('src', elem.poster)
            elemSpanLink4.textContent= elem.author
            elemSPanData4.textContent = elem.release_date
            elemH44.textContent = elem.title
            elemPInfo4.textContent = elem.mini_title

          

            elemDivImg4.appendChild(elemImg4)

            elemP4.appendChild(elemSpanLink4)
            elemP4.appendChild(elemSPanData4)
            elemDivInfo4.appendChild(elemP4)
            elemDivInfo4.appendChild(elemH44)
            elemDivInfo4.appendChild(elemPInfo4)

            elemLi4.appendChild(elemDivImg4)
            elemLi4.appendChild(elemDivInfo4)



            ul4.appendChild(elemLi4)
        })
        findData1.map(elem => {
            let elemLi5 = document.createElement('li')
            let elemDivImg5= document.createElement('div')
            let elemImg5= document.createElement('img')
            let elemDivInfo5 = document.createElement('div')
            let elemSpanLink5 = document.createElement('span')
            let elemSPanData5 = document.createElement('span')
            let elemH45 = document.createElement('h4')
            let elemPInfo5= document.createElement('p')
            let elemP5 = document.createElement('p')
            
            elemLi5.classList.add('c-tab-list-item4')
            elemDivImg5.classList.add('c-tab-item-img-box4')
            elemDivInfo5.classList.add('c-tab-item-info-box4')
            elemSpanLink5.classList.add('c-tab-item-text-links4')
            elemP5.classList.add('c-tab-item-text-link4')
            elemSPanData5.classList.add('c-tab-item-span-data4')
            elemH45.classList.add('c-tab-item-info-title4')
            elemPInfo5.classList.add('c-tab-item-info-text4')

            elemImg5.setAttribute('src', elem.poster)
            elemSpanLink5.textContent= elem.author
            elemSPanData5.textContent = elem.release_date
            elemH45.textContent = elem.title
            elemPInfo5.textContent = elem.mini_title

          

            elemDivImg5.appendChild(elemImg5)

            elemP5.appendChild(elemSpanLink5)
            elemP5.appendChild(elemSPanData5)
            elemDivInfo5.appendChild(elemP5)
            elemDivInfo5.appendChild(elemH45)
            elemDivInfo5.appendChild(elemPInfo5)

            elemLi5.appendChild(elemDivImg5)
            elemLi5.appendChild(elemDivInfo5)



            ul5.appendChild(elemLi5)
        })
    })
}
items()
