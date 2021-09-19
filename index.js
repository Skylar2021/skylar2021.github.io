const advice = document.querySelector('.advices')
const toggleBtn = document.querySelector('.nav-icon')
const toggleList = document.querySelector('nav.web-nav')

// let toggle = true;

toggleBtn.addEventListener('click', ()=>{
    toggleNav()
})

const toggleNav = () =>{
    // if(toggle){}
    console.log('123')
    let toggle = toggleList.style
    console.log(toggleList.style.left)
    toggle.left = toggle.left === '0px' ? toggle.left = '-35%' : toggle.left ='0px' ;
    // toggleList.style.left = toggleList.style.left === '0px' ? toggleList.style.left = '-35%' : toggleList.style.left ==='0px' ;
}
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