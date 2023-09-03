const header = document.querySelector('header')
const headerElements = document.querySelectorAll('.header-elements')

const height = document.body.scrollHeight
let scrollPosition = Math.floor((window.scrollY/height)*2000)
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