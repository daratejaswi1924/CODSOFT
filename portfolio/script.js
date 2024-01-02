let nav=document.querySelector('nav');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('nawinScroll',window,scrollY>0)
})