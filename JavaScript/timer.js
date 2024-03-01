let isStart = false;

// let button = document.getElementById('button');
button.addEventListener('click',()=>{
    if(button.textContent == 'Start'){
        button.innerHTML = "Stop";
        button.style.background = 'red'
        isStart = true
        
    }
    else{
        button.innerHTML = "Start";
        button.style.background = 'green'
        isStart = false
    }
})
let h = 0;
let m = 0;
let s = 0;

setInterval(()=>{
    if(isStart){
        s+=1;
        if(s == 60){
            s = 0;
            m+=1;
        }
        if(m == 60){
            m =  0;
            h += 1;
        }
        timer.innerHTML =` ${h}:${m}:${s}`;
    }
    else{
        timer.innerHTML = `${0}:${0}:${0}`;
        h = 0;
        s = 0;
        m = 0;
    }
},1000)

// let shape = document.getElementById("shape");
shape.addEventListener('click',()=>{
    shapeValue = shape.textContent;
    if( shapeValue == "Square"){
        shape.style.borderRadius = '100%';
        shape.style.background = "cyan";
        shape.innerHTML = "Circle"
    }
    else{
        shape.style.borderRadius = '0%';
        shape.style.background = "gray";
        shape.innerHTML = "Square"
    }
})
//square -> circle

// // document.getElementById("muruga").innerHTML = "KISHORE"


// let arr = [97,113,3,4,5];

// let val = 0;
// let index = '0';

// if(val ===  index){
//     console.log("true")
// }
// else{
//     console.log("false")
// }



// let div = document.getElementById("muruga");

// div.addEventListener('click',()=>{document.getElementById("muruga").innerHTML = "muruga"});



// // let muruga = arr.map((val)=>{
// //     return val;
// // })

// // (()=>{
// //     console.log("muruga")
// // })()

// // kishore()

// // arr.pop()

// // filteredarr = arr.filter((val)=>{
// //     return val>10;
// // })

// // console.log(filteredarr)

// // arr.sort((a,b)=>{ return a-b});
// // console.log(arr)

// // let mapedvalue = arr.map((val)=>{
// //     return val*2;
// // })

// // console.log(mapedvalue)