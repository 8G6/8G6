let script=null;
let [error,sucess] = ['','']
console.green = (a)=>console.log('%c'+a,'color:green')

let loading = new Matrix('background')
loading.timeout     = 100
        this.ctx         = this.canvas.getContext('2d');
        this.background  = 'black'
        this.font        = 'monospace'
        this.fontSize    = '5pt'
        this.charArray   = chars('0','z')
        this.intervel    = null
        this.fontColor   = 'green'
        this.maximize    = true
        this.spaceX      = 150
        this.spaceY      = 150
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

