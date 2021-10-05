"use strict"

// show today weather by Open weather API 
$(function(){
    let apiKey = '4976d245ae88b90b3d05b2808b36fb24';
    $.ajax({
        type:'GET',
        url:`https://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=${apiKey}`,
        success: function(data){
            let weatherIcon = data.weather[0].icon
            let obj = data.weather[0]
            $('.weather').attr({
                src:`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
                alt: obj.description
            })
            $('.weather-descript').html(obj.description)
        }
    })

})

$(document).ready(()=>{
    const date = () => {
        let now = new Date()
        let date = now.toDateString()
        $('.today').html(`${date}: `)
    }
    date()
})
// toggle navbar
$('.nav-icon').on('click',()=>{
    $('.web-nav').toggle(400)
})

$('.nav-item').on('click',()=>{
    $('.web-nav').toggle(400)
    })


// change big image by click event
$('.small-img').on('click', event=>{
    let targetImg = event.currentTarget
    $('.big-img').attr('src', targetImg.src).attr('alt', targetImg.alt).fadeIn()
})