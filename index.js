window.addEventListener('keydown',(e)=>{
    let audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    
    audio.currentTime=0;
    audio.play();
    

})