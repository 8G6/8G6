
[x,y] = [121,121]
document.getElementById('background').style.display = 'none'
let {atan,tan,PI} = Math 
function angle(x,y){
    return x-(2*y)
}
f=0
function range(start,end){
    let array=[]
    for(i=start;i<end;i++){
        array.push(i)
    }
    return array
}

color = toHex(0,256)

let disp=document.querySelector('.loading-bg')
let max_x = disp.scrollWidth
let max_y = disp.scrollHeight
let [bool_x,bool_y] = [1,1]

function get(x,y,x_k,y_k){

    if(x>=120 && x<=max_x-121 && bool_x) x+=x_k
    else{
        if(x>=121){
            bool_x = 0
            x-=x_k
        }
        else{
            bool_x = 1
            x+=x_k
        }
    }
    if(y>=120 && y<=max_y-121  && bool_y) y+=y_k
    else{
        if(y>=120){
            bool_y = 0
            y-=y_k
        }
        else{
            bool_y = 1
            y+=y_k
        }
    }
    return [x,y]
}
let t='black'
let k = setInterval(()=>{
    [x,y]=get(x,y,2,0.1)
    if(x%10==0){
        t=randomColor()
    }
    document.querySelector('.cover').style.top = `${y}px`
    document.querySelector('.cover').style.left = `${x}px`
    document.querySelector('#dev').style.boxShadow = `inset ${y/100}px ${x/100}px ${y/40}px ${x/40}px white`
    console.log(`inset ${x%5}px ${y%10}px 10px white;`)
},10)

