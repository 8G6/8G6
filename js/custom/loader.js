let script=null;
let [error,sucess] = ['','']
console.green = (a)=>console.log('%c'+a,'color:green')

function bubbleSetup(){
    bubble = new Bubble('loading',5)
    bubble.x_speed        = 1
    bubble.y_speed        = 1
    bubble.randColor      = 1
    bubble.colorSatIndex  = 10
    bubble.randColorDelay = 84
    bubble.randSizeLim    = {start:50,end:150,step:25}
    bubble.size           = 100
    bubble.y_offset       = 5
    bubble.x_offset       = 5
    bubble.start()
    let i=0
   
}

function create(url){
    url='./js/'+url+'.js'
    script=document.createElement('script');
    script.src=url
    script.t  =url
    script.onerror = function(){
        console.clear()
        error+=this.t+' not found\n'
        error!='' ? console.error(error) : 0
        console.green(sucess)
    }
    script.onload=function(){
        console.clear()
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
    bubbleSetup()
    let urls   = ['custom/functions','custom/3d/functions','custom/3d/animation']
    let delays = [1,1,1]
    await load(urls,delays)
    // bubble.fadeOut(1000)
    // $('.body').style.display = 'block'
}


