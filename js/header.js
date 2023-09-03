const headerElements = document.querySelectorAll('.header-elements')

window.addEventListener('scroll', //Text color
()=>{
    if(scrollPosition>100){
        for(let i=0; i<=headerElements.length; i++){
            headerElements[i].style.color = 'white'
    }
    }else if(scrollPosition<=100){
        for(let i=0; i<=headerElements.length; i++){
            headerElements[i].style.color = 'black'
        }
    }
})