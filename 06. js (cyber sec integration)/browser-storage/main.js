const modeBtn = document.querySelector('#mode');

window.addEventListener('load',function(){
    const savedMode = localStorage.getItem('mode'); //string
    if(savedMode === 'dark'){
          //switch to DARK
          modeBtn.setAttribute('data-mode','dark');
          document.body.classList.add('bg-dark');
          modeBtn.classList.replace('btn-dark','btn-light');
          modeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
          window.localStorage.setItem('mode','dark');
    }
})


modeBtn.addEventListener('click',function(){
    const currentMode = this.getAttribute('data-mode');
   if(currentMode === 'light'){
        //switch to DARK
        this.setAttribute('data-mode','dark');
        document.body.classList.add('bg-dark');
        this.classList.replace('btn-dark','btn-light');
        this.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        window.localStorage.setItem('mode','dark');
   }
   else{
       //switch to LIGHT
       this.setAttribute('data-mode','light');
       document.body.classList.remove('bg-dark');
       this.classList.replace('btn-light','btn-dark');
       this.innerHTML = `<i class="fa-solid fa-moon"></i>`;
       window.localStorage.setItem('mode','light');
   }
});


//XSS - Reflected XSS, Stored XSS, Blind XSS, DOM-BASED XSS, ...
//CRSF ATTACK
//CLICKJACKING - iframe
//API KEY
//Browser Storage - local storage, session storage, cookie, cache storage, index DB
