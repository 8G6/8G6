
j=0;

let k = setInterval(()=>{
    console.log(j)
    if(j<=80.09)
    j+=0.1
    else
    clearInterval(k)
    document.querySelector('#dev').style.width = `${j}%`
},1)

