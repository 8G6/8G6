let script=null;
let [error,sucess] = ['','']
console.green = (a)=>console.log('%c'+a,'color:green')

let loading = new Matrix('background')
loading.timeout     = 100        
loading.background  = 'black'
loading.font        = 'monospace'
loading.fontSize    = '5pt'
loading.charArray   = chars('0','z')
loading.intervel    = null
loading.fontColor   = 'green'
loading.maximize    = true
loading.spaceX      = 150
loading.spaceY      = 150
this.random      = false
this.randomColor = false
this.fadeOut     = false
this.rain        = false
this.randJSON    = {x:false,y:false}


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

