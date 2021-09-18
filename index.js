const advice = document.querySelector('.advices')

advice.addEventListener("mouseover", e=>{
    e.target.innerHTML = 'Click to give me adivces'
    
})
advice.addEventListener("mouseout",e=>{
    e.target.innerHTML = 'Give Me Advices'
})

advice.addEventListener('click', ()=>{
    // let userInput = window.prompt('Thank you for your advices?')
    getUserAdvices()
})

const getUserAdvices= () =>{
    let userInput = window.prompt('Thank you for your advices?')
    if(userInput){
        window.alert(`Your advice:${userInput}`)
    }
}