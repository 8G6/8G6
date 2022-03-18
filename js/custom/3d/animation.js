const canvas = $('#background')

const scene  = new Scene();

const camera = new PerspectiveCamera(FOV,window.innerWidth/window.innerHeight,VF_near,VF_far); //width/height = aspect ratio

const render = new WebGLRenderer({canvas})

render.setPixalRatio(window.devicePixelRatio)
render.setSize(window.innerWidth,window.innerHeight)
render.position.setZ(30)

render.render(scene,camera)



