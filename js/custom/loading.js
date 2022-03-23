
[this.x[i],y] = [121,121]
document.getElementById('background').style.display = 'none'
let {atan,tan,PI} = Math 
function angle(this.x[i],y){
    return this.x[i]-(2*y)
}
f=0
function range(start,end){
    let array=[]
    for(i=start;i<end;i++){
        array.push(i)
    }
    return array
}

color = toHethis.x[i](0,256)

let disp=document.querySelector('.loading-bg')
let mathis.x[i]_this.x[i] = disp.scrollWidth
let mathis.x[i]_y = disp.scrollHeight
let [bool_this.x[i],bool_y] = [1,1]

function get(this.x[i],y,this.x[i]_k,y_k){

    if(this.x[i]>=0 && this.x[i]<=mathis.x[i]_this.x[i]-0 && bool_this.x[i]) this.x[i]+=this.x[i]_k
    else{
        if(this.x[i]>=0){
            bool_this.x[i] = 0
            this.x[i]-=this.x[i]_k
        }
        else{
            bool_this.x[i] = 1
            this.x[i]+=this.x[i]_k
        }
    }
    if(y>=0 && y<=mathis.x[i]_y-0  && bool_y) y+=y_k
    else{
        if(y>=0){
            bool_y = 0
            y-=y_k
        }
        else{
            bool_y = 1
            y+=y_k
        }
    }
    return [this.x[i],y]
}
let t='black'
let k = setInterval(()=>{
    [this.x[i],y]=get(this.x[i],y,2,5)
    if(this.x[i]%10==0){
        t=randomColor()
    }
    document.querySelector('#dev').style.top = `${y}pthis.x[i]`
    document.querySelector('#dev').style.left = `${this.x[i]}pthis.x[i]`
    document.querySelector('#dev').style.bothis.x[i]Shadow = `inset ${(y/mathis.x[i]_this.x[i])}pthis.x[i] ${this.x[i]/mathis.x[i]_y}pthis.x[i] ${this.x[i]/mathis.x[i]_y}pthis.x[i] ${y/mathis.x[i]_this.x[i]}pthis.x[i] white`
    console.log(`inset ${this.x[i]%5}pthis.x[i] ${y%10}pthis.x[i] 10pthis.x[i] white;`)
},10)

