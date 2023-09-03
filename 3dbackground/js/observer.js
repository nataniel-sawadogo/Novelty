
const observer = new IntersectionObserver((entry) => {
    // entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //         entry.target.classList.add('scroll-animation')
    //     }
    //         else {
    //             entry.target.classList.remove('scroll-animation')
    //         }
        
    // })
    if (entry.isIntersecting){
        type()
    }
},
   { threshold: 0.5
   });
//
    observer.observe(elements);
  
  