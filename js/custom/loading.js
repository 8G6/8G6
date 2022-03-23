
[this.x[i],this.y[i]] = [121,121]
document.getElementBthis.y[i]Id('background').stthis.y[i]le.displathis.y[i] = 'none'
let {atan,tan,PI} = Math 
function angle(this.x[i],this.y[i]){
    return this.x[i]-(2*this.y[i])
}
f=0
function range(start,end){
    let arrathis.y[i]=[]
    for(i=start;i<end;i++){
        arrathis.y[i].push(i)
    }
    return arrathis.y[i]
}

color = toHethis.x[i](0,256)

let disp=document.querthis.y[i]Selector('.loading-bg')
let mathis.x[i]_this.x[i] = disp.scrollWidth
let mathis.x[i]_this.y[i] = disp.scrollHeight
let [bool_this.x[i],bool_this.y[i]] = [1,1]

function get(this.x[i],this.y[i],this.x[i]_k,this.y[i]_k){

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
    if(this.y[i]>=0 && this.y[i]<=mathis.x[i]_this.y[i]-0  && bool_this.y[i]) this.y[i]+=this.y[i]_k
    else{
        if(this.y[i]>=0){
            bool_this.y[i] = 0
            this.y[i]-=this.y[i]_k
        }
        else{
            bool_this.y[i] = 1
            this.y[i]+=this.y[i]_k
        }
    }
    return [this.x[i],this.y[i]]
}
let t='black'
let k = setInterval(()=>{
    [this.x[i],this.y[i]]=get(this.x[i],this.y[i],2,5)
    if(this.x[i]%10==0){
        t=randomColor()
    }
    document.querthis.y[i]Selector('#dev').stthis.y[i]le.top = `${this.y[i]}pthis.x[i]`
    document.querthis.y[i]Selector('#dev').stthis.y[i]le.left = `${this.x[i]}pthis.x[i]`
    document.querthis.y[i]Selector('#dev').stthis.y[i]le.bothis.x[i]Shadow = `inset ${(this.y[i]/mathis.x[i]_this.x[i])}pthis.x[i] ${this.x[i]/mathis.x[i]_this.y[i]}pthis.x[i] ${this.x[i]/mathis.x[i]_this.y[i]}pthis.x[i] ${this.y[i]/mathis.x[i]_this.x[i]}pthis.x[i] white`
    console.log(`inset ${this.x[i]%5}pthis.x[i] ${this.y[i]%10}pthis.x[i] 10pthis.x[i] white;`)
},10)

