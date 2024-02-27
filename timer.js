let button = document.getElementById("btn");
button.addEventListener('click',()=>{
    if(button.textContent=='Start'){
        button.innerHTML="Stop"
        button.style.background='red' 
    }
    else{
        button.innerHTML='Start'
        button.style.background='green'
    }
    
})