
j=0;

let k = setInterval(()=>{
    if(j<=80.1)
    j+=0.1
    else
    clearInterval(k)
    document.querySelector('#dev').style.width = `${j}%`
   
},1)

