let script=null;
let [error,sucess] = ['','']
console.green = (a)=>console.log('%c'+a,'color:green')

let loading = new Matrix('background')

loading.background  = 'black'
loading.font        = 'monospace'
loading.fontSize    = '22pt'
loading.charArray   =  ["Α","α","Β","β","Γ","γ","Δ","δ","Ε","ε","Ζ","ζ","Η","η","Θ","θ","Ι","ι","Κ","κ","Λ","λ","Μ","μ","Ν","ν","Ξ","ξ","Ο","ο","Π","π","Ρ","ρ","Σ","σ","ς","Τ","τ","Υ","υ","Φ","φ","Χ","χ","Ψ","ψ","Ω","ω"]
loading.fontColor   = 'green'
loading.maximize    = true
loading.spaceX      = 15000
loading.spaceY      = 100
loading.random      = true
loading.randomColor = 1
loading.fadeOut     = true

loading.itrate()

function create(url){
    url='./js/'+url+'.js'
    script=document.createElement('script');
    script.src=url
    script.t  =url
    script.onerror = function(){
        // console.clear()
        error+=this.t+' not found\n'
        error!='' ? console.error(error) : 0
        console.green(sucess)
    }
    script.onload=function(){
        // console.clear()
        sucess+=this.t+' loaded sucessfully\n'
        error!='' ? console.error(error) : 0
        console.green(sucess)
    }
    document.body.appendChild(script)
}

async function delay(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}


async function load(urls,delays){
    for(i=0;i<urls.length;i++){
        create(urls[i])
        await delay(delays[i]);
    }
}

async function jsInit(){

    let urls   = ['custom/functions','custom/3d/3d_functions','custom/3d/animation']
    let delays = [1,1,1]
    await load(urls,delays)
}
u=''
for(i=2;i<26;i++){
    for(j=1;j<3;j++){
        u+=document.querySelector(`#tbl1 > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML+=','
    }
}