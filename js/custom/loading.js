function predict(x,bool){
    let coff1 = [7.812500000191304e-8, -0.000017708333333530185, 0.0014687500000070603, -0.05291666666691738, 1.2000000000034017, -3.5185366870743305e-12]
    let coff2 = [0.00006597222222223214, -0.007708333333335091, 0.45992063492068813, 14.809523809523572]
    let i;
    let n = bool ? coff1 : coff2
    let out = 0;
    for(i=0;i<n.length;i++){
        out+=n[i] * x ** (n.length-i-1)
    }
    return out
}

j=0;

let k = setInterval(()=>{
    document.querySelector('#dev').style.width = `${predict(j,1)}%`
    document.querySelector('#dev').style.left  = `${predict(j,0)}%` 
    console.log(j,predict(j,1),predict(j,0))
    if(j<100)
    j++
    else
    clearInterval(k)
},500)

