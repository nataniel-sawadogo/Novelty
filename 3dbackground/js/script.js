const header = document.querySelector('header')
const headerElements = document.querySelectorAll('.header-elements')

const height = document.body.scrollHeight

const button2 = document.querySelector('#button2')
const circles = document.querySelectorAll('.welcome-circles')

const paper = document.querySelector('.paper')
const firstHalf = document.querySelector('.first-half')
const secondHalf = document.querySelector('.second-half')
const firstHalfInner = document.querySelector('.first-half > .inner')
const secondHalfInner = document.querySelector('.second-half > .inner')
const circle = document.querySelector('.circle')
const circleContainer = document.querySelector('.circle-container')
const map = document.querySelector('#loc')
const mapIn = document.querySelector('#loc > iframe')
const prePaper = document.querySelector('.pre-paper')

const review = document.querySelectorAll('.review')
const hiddenReview = document.querySelectorAll('.hidden')
const shownReview = document.querySelectorAll('.shown')

const copyright = document.querySelector('#copyright')

const plusButton = document.querySelector('.plus')
const headerList = document.querySelector('#header-list')

let scrollPosition = Math.floor((window.scrollY/height)*2000)
let cardPosition = 0

let d = new Date()

const aboutUs = [
    'A veterinary clinic opened in 2009, we started small, with low amounts of',
    'material and infrastructure, but with the will to aid all suffering furry',
    'companions. Thanks to the support of our clients and those around us, and',
    'our strive for excellence, we have grown from simple checkups and',
    'prescriptions to a wide variety of services, surgery, vaccination, and diverse',
    'forms of pet care.',
    'We have more than 15 veterinarians and specialists here to provide',
    'the best and most complete care for your animals.'
]
const aboutText = document.querySelectorAll('.text-container2>p')
const about = document.querySelector('#about')


console.log(height);
const swipeRight = ()=>{
    console.log(cardPosition);
    button2.style.display = 'none'
    let welcomeCards = document.querySelectorAll('.welcome-cards')
    let firstCard = document.querySelector('.first-card')
    let secondCard = document.querySelector('.second-card')
    let thirdCard = document.querySelector('.third-card')
    welcomeCards.forEach((el)=>{
        el.style.animation = 'none'
    })
    if (cardPosition==2){
        cardPosition = 0
        // welcomeCards[0].setAttribute('class', 'welcome-cards first-card')
        // welcomeCards[1].setAttribute('class', 'welcome-cards second-card')
        // welcomeCards[2].setAttribute('class','welcome-cards third-card')
    }else{
        cardPosition++
    }
    if(cardPosition == 0){
        circles[cardPosition].style.backgroundColor = 'gray'
        circles[2].style.backgroundColor = 'white'
    }else{
        circles[cardPosition].style.backgroundColor = 'gray'
        circles[cardPosition - 1].style.backgroundColor = 'white'
    }
    console.log('Swipe right');
    firstCard.style.animation = 'swipe-right 4s'
    setTimeout(()=>{
        secondCard.classList.add('first-card')
        secondCard.classList.remove('second-card')
        thirdCard.classList.add('second-card')
        thirdCard.classList.remove('third-card')
    },700)
    setTimeout(()=>{
        firstCard.classList.add('third-card')
        firstCard.classList.remove('first-card')
    },2400)
    setTimeout(() => {
        button2.style.display = 'initial'
    }, 4000);
}

//Map animation
const revealPaper = ()=>{
    prePaper.style.animation = 'conceal 0.5s'
    setTimeout(() => {
        prePaper.style.display = 'none'
    }, 500);
    paper.style.animation = 'reveal 0.5s'
    setTimeout(() => {
        paper.style.display = 'flex'
    }, 2000);
}

const revealMap = ()=>{
    secondHalf.style.animation = 'open 2s'
    secondHalf.style.transform = 'rotateY(180deg)'
    paper.classList.add('active')
    circleContainer.style.animation = 'open 2s'
    circleContainer.style.transform = 'rotateY(180deg)'
    setTimeout(() => {
        map.classList.toggle('active')
    }, 2500);
}

//Reviews
const randomNumber = (x)=>{
    return Math.floor(Math.random()*x)
}

const generateRandomPosition = ()=>{
    for(let i = 0; i <= 3; i++){
        review[randomNumber(7)].classList.add('hidden')
        console.log('done');
        //review[randomNumber(7)].style.opacity = '0'
    }
}

const changeReviews = ()=>{
    hiddenReview[randomNumber(3)].classList.remove('hidden')
    shownReview[randomNumber(3)].classList.add('hidden')
    console.log('changed');
}

// generateRandomPosition()
// setTimeout(() => {
//     setInterval(() => {
//         changeReviews()
//     }, 3000);
// }, 3000);

//Typing animation
console.log(aboutText.length);
const type = ()=>{
    for (let i = 0; i < aboutText.length; i++) {
        setTimeout(() => {
            let line = Array.from(aboutUs[i])
            let output
            for(let j = 0; j <= line.length; j++){
                setTimeout(()=>{
                    output = line.slice(0,j).join('')
                    console.log(output)
                    aboutText[i].innerHTML = output
                },j * 10)
            }
        }, i * 800);
    }
}


//Copyright
let year = d.getFullYear()
copyright.innerHTML = 'Copyright ' + year + ', Novelty, All rights reserved.'

//Plus button
const displayMenu = ()=>{
    headerList.classList.toggle('active')
    headerList.style.animation = 'slide-down 0.6s'
    plusButton.classList.toggle('active')
}
let typed = 0
window.addEventListener('scroll', ()=>{
    //Header transition animation
    let scrollPosition = Math.floor((window.scrollY/height)*2000)
    console.log(scrollPosition);
    if(scrollPosition>100){
        header.style.backgroundColor = '#FFBD59'
    }else if(scrollPosition>1 && scrollPosition<=100){
        header.style.backgroundColor = `rgba(255, 188, 87, ${Math.fround(scrollPosition/100)})`
        console.log(header.style.backgroundColor);
    }else{
        header.style.background = 'none'
    }
    
    if(scrollPosition>=1400 && typed==0){
        typed = 1
        type()
    }
  }
)
window.addEventListener('scroll', //Text color
()=>{
    if(scrollPosition>100){
        for(let i=0; i<=headerElements.length; i++){
           // headerElements[i].classList.add('active')
           headerElements[i].style.color = 'white'
    }
    }else if(scrollPosition<=100){
        for(let i=0; i<=headerElements.length; i++){
            //headerElements[i].classList.remove('active')
            headerElements[i].style.color = 'black'
        }
    }
})




