
j=0;

let k = setInterval(()=>{
    document.querySelector('#dev').style.width = `${j}%`
    console.log(j)
    if(j<79.9)
    j+=0.1
    else
    clearInterval(k)
},1)

