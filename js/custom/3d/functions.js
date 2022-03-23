
let FOV         = 75 //Feild of view

let VF_near     = 0.1          // View Frustum
let VF_far      = 1000


canvas = $('#background')
scene  = new THREE.Scene();
camera = new THREE.PerspectiveCamera(FOV,window.innerWidth/window.innerHeight,VF_near,VF_far); //width/height = aspect ratio

render = new THREE.WebGLRenderer({canvas})

render.setPixelRatio(window.devicePixelRatio)
render.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30)

render.render(scene,camera)

