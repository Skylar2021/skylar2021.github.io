'use strict'

const grids = document.querySelectorAll('.grid')
const title = document.querySelector('h2')
const r1c1 = document.querySelector('.r1c1')
const r1c2 = document.querySelector('.r1c2')
const r1c3 = document.querySelector('.r1c3')

const r2c1 = document.querySelector('.r2c1')
const r2c2 = document.querySelector('.r2c2')
const r2c3 = document.querySelector('.r2c3')

const r3c1 = document.querySelector('.r3c1')
const r3c2 = document.querySelector('.r3c2')
const r3c3 = document.querySelector('.r3c3')

let nextPlayer,currentPlayer, pattern, toggle = true, firstPlayer = 1, gameActive = true;

title.innerHTML = `Player ${firstPlayer} please.`

const addPattern = (target) =>{
    if(toggle){
        currentPlayer = 1
        nextPlayer = 2
        pattern = 'O'
        toggle = !toggle
    } else {
        currentPlayer = 2
        nextPlayer = 1
        pattern = 'X'
        toggle = !toggle
    }
    target.innerHTML = pattern
    title.innerHTML = `Player ${nextPlayer} please.`
    // console.log(r1c1.innerHTML)
    isWon()
console.log(gameState)

}

// const shownextPlayer = () =>{
//     title.innerHTML = `Player ${toggle ? 1 : 2}`
// }

for(let i of grids){
    i.addEventListener('click', (e)=>{
        if(!isClick(e.target.innerHTML) && gameActive){
            addPattern(i)
        } else {
            return
        }
        
    })
}

const counting = () =>{
    let row1 = 0
    let row2 = 0
    let row3 = 0
    let col1 = 0
    let col2 = 0
    let col3 = 0
    let leftcross = 0
    let rightcross = 0
    
}

const gameState = [[r1c1.innerHTML, r1c2.innerHTML, r1c3.innerHTML], [r2c1.innerHTML, r2c2.innerHTML, r2c3.innerHTML], [r3c1.innerHTML, r3c2.innerHTML, r3c3.innerHTML]]

console.log(gameState[0])

const isWon = () =>{
    // if(gameState[0].every(isO) || gameState[0].every(isX) ){    }
    if(r1c1.innerHTML === 'O' && r1c2.innerHTML === 'O' && r1c3.innerHTML === 'O' ){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c1.innerHTML === 'X' && r1c2.innerHTML === 'X' && r1c3.innerHTML === 'X' ){
        console.log('123')
        gameActive = false
        return true
    } else if(r2c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r2c3.innerHTML === 'O'){
        console.log('123')
        gameActive = false
        return true
    
    } else if(r2c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r2c3.innerHTML === 'X'){
        console.log('123')
        gameActive = false
        return true
    
    } else if(r3c1.innerHTML === 'O' && r3c2.innerHTML === 'O'&& r3c3.innerHTML === 'O'){
        console.log('123')
        gameActive = false
        return true
    } else if(r3c1.innerHTML === 'X' && r3c2.innerHTML === 'X'&& r3c3.innerHTML === 'X'){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c1.innerHTML === 'O' && r2c1.innerHTML === 'O' && r3c1.innerHTML === 'O'){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c1.innerHTML === 'X' && r2c1.innerHTML === 'X' && r3c1.innerHTML === 'X'){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c2.innerHTML === r2c2.innerHTML && r2c2.innerHTML === r3c2.innerHTML){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c3.innerHTML === r2c3.innerHTML && r2c3.innerHTML === r3c3.innerHTML){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c1.innerHTML === r2c2.innerHTML && r2c2.innerHTML === r3c3.innerHTML){
        console.log('123')
        gameActive = false
        return true
    } else if(r1c3.innerHTML === r2c2.innerHTML && r2c2.innerHTML === r3c1.innerHTML){
        console.log('123')
        gameActive = false
        return true
    }
}

// const isO = str => str === 'O'
// const isX = str => str === 'X'

const isClick = (target) =>{
    if(target){
        return true
    } else {
        return false
    }
}
