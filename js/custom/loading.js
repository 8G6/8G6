function predict(x,bool){
    let coff1 = [7.812500000191304e-8, -0.000017708333333530185, 0.0014687500000070603, -0.05291666666691738, 1.2000000000034017, -3.5185366870743305e-12]
    let coff2 = [9.114583333497874e-8, -0.000019270833333384327, 0.0014635416666805413, -0.04729166666731731, 0.8000000000080669, 14.999999999994879]
    let i;
    let n = bool ? coff1 : coff2
    let out = 0;
    for(i=0;i<n.length;i++){
        out+=n[i] * x ** (n.length-i-1)
    }
    return out
}

i=0;

let k = setInterval(()=>{
    document.querySelector('#dev').style.width = `${predict(i,1)}%`
    document.querySelector('#dev').style.left  = `${predict(i,0)}%` 
    console.log(i,predict(i,1),predict(i,0))
    if(i==100)
    i=0
    else
    i++
},1)

