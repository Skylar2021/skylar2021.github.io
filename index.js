const advice = document.querySelector('.advices')
const toggleBtn = document.querySelector('.nav-icon')
const toggleList = document.querySelector('nav.web-nav')
const navItem = document.querySelectorAll('.nav-item')
const smallImg = document.querySelectorAll('.small-img')
const bigImg = document.querySelector('.big-img')

const imgArr = [
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    },
    {
        id: '',
        src: '',
        alt: ''
    }
]


toggleBtn.addEventListener('click', ()=>{
    toggleNav()
})

const toggleNav = () =>{
    let toggle = toggleList.style
    toggle.left = toggle.left === '0px' ? toggle.left = '-40%' : toggle.left ='0px' ;
}

const changeImg = (targetImg) =>{
    bigImg.src = targetImg.src
    bigImg.id = targetImg.id
    bigImg.alt = targetImg.alt

}

smallImg.forEach(img=>{
    img.addEventListener('click', ({target})=>{
        changeImg(target)
    })
})

navItem.forEach(item =>{
    item.addEventListener('click', ()=>{
        toggleNav()
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

const getUserAdvices= () =>{
    let userInput = window.prompt('Thank you for your advices?')
    if(userInput){
        window.alert(`Your advice:${userInput}`)
    }
}