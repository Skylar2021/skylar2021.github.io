'use strict'

const grids = document.querySelectorAll('.grid')
const title = document.querySelector('h2')
const resetBtn = document.querySelector('.reset-btn')
const displayWinner = document.querySelector('.winner')
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


const wonMessage = (status) =>{
    
    title.innerHTML = status ? `Player ${currentPlayer} won!` : 'Tied!'
}

const resetGame = () =>{
    grids.forEach(grid=>{
        grid.innerHTML = null
    })
    gameActive = true
    nextPlayer = null
    firstPlayer = 1
    currentPlayer = firstPlayer
    title.innerHTML = `Player ${firstPlayer} please.`
}

resetBtn.addEventListener('click', resetGame)

const isClick = (target) =>{
    if(target){
        return true
    } else {
        return false
    }
}

const isTie = () =>{
    let fill = 0
    
    grids.forEach(grid=>{
        if(grid.innerHTML){
            fill++
        } else {
            fill
        }
    })

    if(fill === 9){
        return true
    } else {
        return false
    }
}

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
}

for(let i of grids){
    i.addEventListener('click', (e)=>{
        if(!isClick(e.target.innerHTML) && gameActive){
            addPattern(i)
            setTimeout(()=>{
                if(isWon()){
                    gameActive = false
                    wonMessage(true)
                } else if(isTie()){
                    gameActive = false
                    wonMessage(false)

                }
            },0)
        } else {
            return
        }
    })
}

const isWon = () =>{
    if(r1c1.innerHTML === 'O' && r1c2.innerHTML === 'O' && r1c3.innerHTML === 'O' ){
        console.log('123')
        return true
    } else if(r1c1.innerHTML === 'X' && r1c2.innerHTML === 'X' && r1c3.innerHTML === 'X' ){
        console.log('123')
        return true
    } else if(r2c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r2c3.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r2c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r2c3.innerHTML === 'X'){
        console.log('123')
        return true
    } else if(r3c1.innerHTML === 'O' && r3c2.innerHTML === 'O'&& r3c3.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r3c1.innerHTML === 'X' && r3c2.innerHTML === 'X'&& r3c3.innerHTML === 'X'){
        console.log('123')
        return true
    } else if(r1c1.innerHTML === 'O' && r2c1.innerHTML === 'O' && r3c1.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r1c1.innerHTML === 'X' && r2c1.innerHTML === 'X' && r3c1.innerHTML === 'X'){
        console.log('123')
        return true
    } else if(r1c2.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c2.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r1c2.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c2.innerHTML === 'X'){
        console.log('123')
        return true
    } else if(r1c3.innerHTML === 'O' && r2c3.innerHTML === 'O' && r3c3.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r1c3.innerHTML === 'X' && r2c3.innerHTML === 'X' && r3c3.innerHTML === 'X'){
        console.log('123')
        return true
    }else if(r1c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c3.innerHTML === 'O'){
        console.log('123')
        return true
    } else if(r1c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c3.innerHTML === 'X'){
        console.log('123')
        return true
    } else if(r1c3.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c1.innerHTML=== 'O'){
        console.log('123')
        return true
    }  else if(r1c3.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c1.innerHTML=== 'X'){
        console.log('123')
        return true
    }
}