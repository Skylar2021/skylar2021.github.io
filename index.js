"use strict"

// const advice = document.querySelector('.advices')
const toggleBtn = document.querySelector('.nav-icon')
const smallImg = document.querySelectorAll('.small-img')

// show today weather 
const showWeather = async () => {
    let apiKey = '4976d245ae88b90b3d05b2808b36fb24'
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=${apiKey}`)
        if (response.ok) {
            let result = await response.json()
            let weatherIcon = result.weather[0].icon
            let obj = result.weather[0]
            const weather = document.querySelector('.weather')
            const weatherDescript = document.querySelector('.weather-descript')
            weather.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            weather.alt = obj.description
            weatherDescript.innerHTML = obj.description
        }
    } catch (err) {
        console.log(err.message)
    }
}

const date = () => {
    let now = new Date()
    let date = now.toDateString()
    const today = document.querySelector('.today')
    today.innerHTML = `${date}: `
}

document.addEventListener('DOMContentLoaded', () => {
    showWeather()
    date()
})

// toggle navbar
const toggleNav = () => {
    const toggleList = document.querySelector('nav.web-nav')
    let toggle = toggleList.style
    toggle.left = toggle.left === '0px' ? toggle.left = '-50%' : toggle.left = '0px';
}

toggleBtn.addEventListener('click', () => {
    toggleNav()
})

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener('click', () => {
        toggleNav()
    })
})

const changeImg = (targetImg) => {
    const bigImg = document.querySelector('.big-img')
    bigImg.src = targetImg.src
    bigImg.id = targetImg.id
    bigImg.alt = targetImg.alt
}

smallImg.forEach(img => {
    img.addEventListener('click', ({ target }) => {
        changeImg(target)
    })
})

// advice.addEventListener("mouseover", e=>{
//     e.target.innerHTML = 'Click to give me adivces'

// })
// advice.addEventListener("mouseout",e=>{
//     e.target.innerHTML = 'Give Me Advices'
// })

// advice.addEventListener('click', ()=>{
//     // let userInput = window.prompt('Thank you for your advices?')
//     getUserAdvices()
// })

// const getUserAdvices = () => {
//     let userInput = window.prompt('Thank you for your advices?')
//     if (userInput) {
//         window.alert(`Your advice:${userInput}`)
//     }
// }
