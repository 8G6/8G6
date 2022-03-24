/*////////////////////////////////////////////////////////////

WRITTEN BY : 8G6
LICENSE    : GNU General Public License v3.0 

////////////////////////////////////////////////////////////*/


let $     = (a,t=1)             => t ? document.querySelector(a) : document.querySelectorAll(a)
let rand  = (a)                 => a[Math.floor(Math.random()*a.length)]
let range = (start,end,step=1)  => {
    let arr = []
    let i;
    for(i=start;i<end+1;i+=step)
        arr.push(i)
    return arr
}
let hex = toHex(0,256)
function toHex(strat,end){
    let arr=[];
    for(i=strat;i<end+1;i++){
        arr.push(i.toString(16))
    }
    return arr
}

function predict(time){
    let rem = 0,i;
    let coff = [-3.0657942138772067e-16, 1.729228857368293e-12, -4.0042396582245056e-9, 0.000004916003504282592, -0.003409059861779712, 1.2970163652633955, 18.175382805593483]
    for(i=0;i<coff.length;i++){
        rem+=coff[i] * time ** (coff.length-i-1)
    }
    return rem
}

function randomColor(){
    return '#'+rand(hex)+rand(hex)+rand(hex)+rand(hex)
}

class Bubble{
    constructor(parent_id,bubble_count=10,x_speed=1,y_speed=1){
        this.parent             = $('#'+parent_id)
        this.bubble_count       = bubble_count>500 ? alert('500<=bubble_count') : bubble_count
        this.bool_x             = Array(this.bubble_count).fill(1)
        this.bool_y             = Array(this.bubble_count).fill(1)
        this.max_x              = screen.width
        this.max_y              = screen.height
        this.x_speed            = x_speed
        this.y_speed            = y_speed
        this.randSpeeds         = {x:range(1,7),y:range(1,7)}
        this.randSpeed          = false
        this.randSize           = false
        this.randSizeLim        = {}
        this.randSizeLim.start  = 10
        this.randSizeLim.end    = 320
        this.randSizeLim.step   = 10
        this.randSizes          = []
        this.x                  = Array(this.bubble_count).fill(0)
        this.y                  = Array(this.bubble_count).fill(0)
        this.x_poss             = range(0,this.max_x,2)
        this.y_poss             = range(0,this.max_y,2)
        this.size               = 50
        this.y_offset           = 2
        this.x_offset           = 2
        this.timeout            = 15
        this.sizes              = []
        this.c                  = 0
        this.colorSatIndex      = 25
        this.color              = '#ffffff2f'
        this.randColor          = false
        this.randColorDelay     = 250
        this.timeStart          = new Date().getTime()
        this.times              = []
    }
    physics = (i,randSpeeds)=>{
        if(this.x[i]>=0 && this.x[i]<=this.max_x-this.x_offset && this.bool_x[i]) this.x[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.x_speed
        else{
            if(this.x[i]>=this.x_offset){
                this.bool_x[i] = 0
                this.x[i]-=this.randSpeed ? randSpeeds.x : this.x_speed
            }
            else{
                this.bool_x[i] = 1
                this.x[i]+=this.randSpeed ? randSpeeds.x : this.x_speed
            }
        }
        if(this.y[i]>=0 && this.y[i]<=this.max_y-this.y_offset && this.bool_y[i]) this.y[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.y_speed
        else{
            if(this.y[i]>=this.y_offset){
                this.bool_y[i] = 0
                this.y[i]-=this.randSpeed ? randSpeeds.y : this.y_speed
            }
            else{
                this.bool_y[i] = 1
                this.y[i]+=this.randSpeed ? randSpeeds.y : this.y_speed
            }
        }

        return [this.x[i],this.y[i]]
    }
    init = ()=>{
        this.randSizes      = range(this.randSizeLim.start,this.randSizeLim.end,this.randSizeLim.step)
        console.log(this.randSizeLim.start,this.randSizeLim.end,this.randSizeLim.step)
        this.parent.classList.toggle('bg')
        let i=0,div,y=0;
        for(i=0;i<this.bubble_count;i++){
            y= this.randSize ?  rand(this.randSizes) : this.size
            this.sizes.push(y)
            div=document.createElement('div');
            div.className = 'bubble'
            div.id        = `bubble-${i}`
            div.style.width  = `${y}px`
            div.style.height = `${y}px`
            this.x[i] = rand(this.x_poss)
            this.y[i] = rand(this.y_poss)
            div.style.left = `${this.x[i]}px`
            div.style.top  = `${this.y[i]}px`
            this.parent.appendChild(div)
        }
    }
    animate = () =>{
        let i;
        for(i=0;i<this.bubble_count;i++){
            [this.x[i],this.y[i]] = this.physics(i,{
                x:rand(this.randSpeeds.x),
                y:rand(this.randSpeeds.y)
            })
            $(`#bubble-${i}`).style.left = `${this.x[i]}px`
            $(`#bubble-${i}`).style.top  = `${this.y[i]}px`
            $(`#bubble-${i}`).style.boxShadow = `inset ${(this.colorSatIndex/100)*this.sizes[i]*this.y[i]/this.max_y}px 
                                                       ${(this.colorSatIndex/100)*this.sizes[i]*this.x[i]/this.max_x}px 
                                                       ${(this.colorSatIndex/100)*this.sizes[i]*this.y[i]/this.max_y}px 
                                                       ${(this.colorSatIndex/100)*this.sizes[i]*this.x[i]/this.max_x}px 
                                                       ${this.color}`
        }
        this.c++
        if(this.c%this.randColorSpeed==0 && this.randColor){
            this.color = randomColor()
            this.times.push(-this.timeStart + new Date().getTime())
        }
    }
    start = (timeout=this.timeout) =>{
        this.randColorSpeed = parseInt(predict(this.randColorDelay))-18
        console.log(this.randColorSpeed)
        this.init()
        setInterval(this.animate,timeout)
    }
}


let x = [-100,100,20]
let y = [3032,19,1216]
