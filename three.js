//Importing the necessary...
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

//Const and var
const height = document.body.scrollHeight
let scrollPosition = Math.floor((window.scrollY/height)*2000)
console.log(scrollPosition);

//Setup

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xfffabf, 50, 100)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 250);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.outputColorSpace = THREE.SRGBColorSpace

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
camera.position.setZ(125)
camera.rotation.y = 3.14

renderer.render(scene, camera)

//Light
const ambientLight = new THREE.AmbientLight(0xffffff)
const light1 = new THREE.PointLight(0xffffff)
light1.position.set(0, -120, 100)
const light2 = new THREE.PointLight(0xffff00)
light2.position.set(185,15,0)
const sunSphere = new THREE.SphereGeometry(3,30,30)
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00})
const sun = new THREE.Mesh(sunSphere, sunMaterial)
sun.position.set(185,15,0)
scene.add(ambientLight, light1, light2, sun)

//Orbit controls
// const lightHelper = new THREE.PointLightHelper(light1)
// const lightHelper2 = new THREE.PointLightHelper(light2)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper, lightHelper, lightHelper2)

// const controls = new OrbitControls(camera, renderer.domElement);

let helpers = false

if (window.location.href.includes("index3")) helpers = true

if (helpers) {
    const lightHelper = new THREE.PointLightHelper(light1)
    const lightHelper2 = new THREE.PointLightHelper(light2)
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper, lightHelper, lightHelper2)

    const controls = new OrbitControls(camera, renderer.domElement);

    scene.fog = null

}

//Text
const fontLoader = new FontLoader()
fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json',
    (droidFont)=>{
        const textGeometry = new TextGeometry('WELCOME TO NOVELTY', {
            height : 0,
            size : 5,
            font : droidFont,
        })
        const textMaterial = new THREE.MeshStandardMaterial({color: 0x040b1a})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = 38
        textMesh.position.z = 150
        textMesh.rotation.y = 3.14
        scene.add(textMesh)
     }
)
fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json',
    (droidFont)=>{
        const textGeometry = new TextGeometry('OUR SERVICES',{
            height : 0,
            size : 5,
            font : droidFont,
        })
        const textMaterial = new THREE.MeshStandardMaterial({color: 0x040b1a})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = 23
        textMesh.position.z = 75
        textMesh.rotation.y = 3.14
        scene.add(textMesh)
     }
)
fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json',
    (droidFont)=>{
        const textGeometry = new TextGeometry('REVIEWS',{
            height : 0,
            size : 5,
            font : droidFont,
        })
        const textMaterial = new THREE.MeshStandardMaterial({color: 0x040b1a})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = -50
        textMesh.position.z = 13
        textMesh.rotation.y = 1.57
        scene.add(textMesh)
     }
)
fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json',
    (droidFont)=>{
        const textGeometry = new TextGeometry('ABOUT US',{
            height : 0,
            size : 5,
            font : droidFont,
        })
        const textMaterial = new THREE.MeshStandardMaterial({color: 0x040b1a})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = -15
        textMesh.position.z = -50
        scene.add(textMesh)
     }
)
fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json',
    (droidFont)=>{
        const textGeometry = new TextGeometry('CONTACT US',{
            height : 0,
            size : 5,
            font : droidFont,
        })
        const textMaterial = new THREE.MeshStandardMaterial({color: 0x040b1a})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = 50
        textMesh.position.z = -19
        textMesh.rotation.y = -1.57
        scene.add(textMesh)
     }
)

//Bones
let loadedBone1
let bone
const bones = []
const loader = new GLTFLoader()

//const loadBone = ()=>{
    loader.load(
        'models/bone2.glb',
        function(boneAdd){
            loadedBone1=boneAdd
            const model = boneAdd.scene
            const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(200))
            boneAdd.scene.position.set(x,y,z)
            boneAdd.scene.scale.set(0.025,0.025,0.025)
            bone = model
            scene.add(boneAdd.scene)
        }
    )
//}
// setTimeout(()=>{
//     bones = Array(100).fill().forEach(loadBone)
// },1000)
// console.log(bones2.length);
setTimeout(()=>{
    for(let j = 0; j<100; j++){
        const boneClone = SkeletonUtils.clone(bone)
        const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(200))
        boneClone.position.set(x, y, z)
        scene.add(boneClone)
        bones.push(boneClone)
    }
},1000)
console.log(bones.length);

//City
loader.load(
    'models/City.glb',
    function(cityAdd1){
        cityAdd1.scene.scale.set(0.5, 1.3, 1)
        cityAdd1.scene.position.x = 185
        cityAdd1.scene.position.z = 3
        cityAdd1.scene.position.y = -10
        scene.add(cityAdd1.scene)
    }
)

//Balls
let colour
function randColor(){
    let colorsArray = ["63b598", "ce7d78", "ea9e70", "a48a9e", "c6e1e8", "648177", "0d5ac1",
"f205e6", "1c0365", "14a9ad", "4ca2f9", "a4e43f", "d298e2", "6119d0",
"d2737d", "c0a43c", "f2510e", "651be6", "79806e", "61da5e", "cd2f00",
"9348af", "01ac53", "c5a4fb", "996635", "b11573", "4bb473", "75d89e",
"2f3f94", "2f7b99", "da967d", "34891f", "b0d87b", "ca4751", "7e50a8",
"c4d647", "e0eeb8", "11dec1", "289812", "566ca0", "ffdbe1", "2f1179",
"935b6d", "916988", "513d98", "aead3a", "9e6d71", "4b5bdc", "0cd36d",
"250662", "cb5bea", "228916", "ac3e1b", "df514a", "539397", "880977",
"f697c1", "ba96ce", "679c9d", "c6c42c", "5d2c52", "48b41b", "e1cf3b",
"5be4f0", "57c4d8", "a4d17a", "225b8", "be608b", "96b00c", "088baf",
"f158bf", "e145ba", "ee91e3", "05d371", "5426e0", "4834d0", "802234",
"6749e8", "0971f0", "8fb413", "b2b4f0", "c3c89d", "c9a941", "41d158",
"fb21a3", "51aed9", "5bb32d", "807fb", "21538e", "89d534", "d36647",
"7fb411", "0023b8", "3b8c2a", "986b53", "f50422", "983f7a", "ea24a3",
"79352c", "521250", "c79ed2", "d6dd92", "e33e52", "b2be57", "fa06ec",
"1bb699", "6b2e5f", "64820f", "1c271", "21538e", "89d534", "d36647",
"7fb411", "0023b8", "3b8c2a", "986b53", "f50422", "983f7a", "ea24a3",
"79352c", "521250", "c79ed2", "d6dd92", "e33e52", "b2be57", "fa06ec",
"1bb699", "6b2e5f", "64820f", "1c271", "9cb64a", "996c48", "9ab9b7",
"06e052", "e3a481", "0eb621", "fc458e", "b2db15", "aa226d", "792ed8",
"73872a", "520d3a", "cefcb8", "a5b3d9", "7d1d85", "c4fd57", "f1ae16",
"8fe22a", "ef6e3c", "243eeb", "1dc18", "dd93fd", "3f8473", "e7dbce",
"421f79", "7a3d93", "635f6d", "93f2d7", "9b5c2a", "15b9ee", "0f5997",
"409188", "911e20", "1350ce", "10e5b1", "fff4d7", "cb2582", "ce00be",
"32d5d6", "17232", "608572", "c79bc2", "00f87c", "77772a", "6995ba",
"fc6b57", "f07815", "8fd883", "060e27", "96e591", "21d52e", "d00043",
"b47162", "1ec227", "4f0f6f", "1d1d58", "947002", "bde052", "e08c56",
"28fcfd", "bb09b", "36486a", "d02e29", "1ae6db", "3e464c", "a84a8f",
"911e7e", "3f16d9", "0f525f", "ac7c0a", "b4c086", "c9d730", "30cc49",
"3d6751", "fb4c03", "640fc1", "62c03e", "d3493a", "88aa0b", "406df9",
"615af0", "4be47", "2a3434", "4a543f", "79bca0", "a8b8d4", "00efd4",
"7ad236", "7260d8", "1deaa7", "06f43a", "823c59", "e3d94c", "dc1c06",
"f53b2a", "b46238", "2dfff6", "a82b89", "1a8011", "436a9f", "1a806a",
"4cf09d", "c188a2", "67eb4b", "b308d3", "fc7e41", "af3101", "ff065",
"71b1f4", "a2f8a5", "e23dd0", "d3486d", "00f7f9", "474893", "3cec35",
"1c65cb", "5d1d0c", "2d7d2a", "ff3420", "5cdd87", "a259a4", "e4ac44",
"1bede6", "8798a4", "d7790f", "b2c24f", "de73c2", "d70a9c", "25b67",
"88e9b8", "c2b0e2", "86e98f", "ae90e2", "1a806b", "436a9e", "0ec0ff",
"f812b3", "b17fc9", "8d6c2f", "d3277a", "2ca1ae", "9685eb", "8a96c6",
"dba2e6", "76fc1b", "608fa4", "20f6ba", "07d7f6", "dce77a", "77ecca"]
for (var i = -1000; i < 1000; i += 10) {
    colour = new THREE.Color();
    colour.setHex(`0x${colorsArray[Math.floor(Math.random() * colorsArray.length)]}`);
    if (colour < 500) {
        colour.setHex(500);
    }
}
}

function addBall(){
    randColor()
    console.log(colour);
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: colour });
  const ball = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

  ball.position.set(x, y, z);
  scene.add(ball);
}
Array(200).fill().forEach(addBall)

//Cadeceus
let cadeceus

loader.load(
    'models/cadeceus.glb',
    function(cadeceusAdd){
        cadeceus = cadeceusAdd
        cadeceusAdd.scene.scale.set(20,20,20)
        cadeceusAdd.scene.position.x = 0
        cadeceusAdd.scene.position.y = -10
        cadeceusAdd.scene.position.z = 25
        scene.add(cadeceusAdd.scene)
    }
)

//Star
let star1
let star2
let star3
loader.load(
    'models/20facestar.glb',
    function(starAdd){
        star1 = starAdd
        starAdd.scene.scale.set(2,2,2)
        starAdd.scene.rotation.z = 1.57
        starAdd.scene.position.set(-95, 0, 0)
        scene.add(starAdd.scene)
    }
)
loader.load(
    'models/20facestar.glb',
    function(starAdd){
        star2 = starAdd
        starAdd.scene.scale.set(2,2,2)
        starAdd.scene.rotation.z = 1.57
        starAdd.scene.position.set(-95, 0, 15)
        scene.add(starAdd.scene)
    }
)
loader.load(
    'models/20facestar.glb',
    function(starAdd){
        star3 = starAdd
        starAdd.scene.scale.set(2,2,2)
        starAdd.scene.rotation.z = 1.57
        starAdd.scene.position.set(-95, 0, -15)
        scene.add(starAdd.scene)
    }
)

//Dog
// loader.load(
//     'models/shiba2.glb',
//     function(dogAdd){
//         dogAdd.scene.scale.set(20,20,20)
//         scene.add(dogAdd.scene)
//     }
// )

//Background
scene.background = new THREE.Color(0xfffabf)

//ScrollPosition
let scroll
window.addEventListener('scroll', ()=>{
    let scrollPosition = Math.floor((window.scrollY/height)*2000)
    scroll = scrollPosition
    console.log(scroll);
})

//Camera movements
function moveCamera() {
    let newScroll
    let smallRad = Math.PI / 200
    if(scroll <= 730){
        if(scroll == 730){
            camera.rotation.set(0, 3.14, 0)
        }
        console.log('f1');
        camera.position.setX( 0 )
        camera.rotation.set(0, 3.14, 0)

        camera.position.z = 125 - (scroll * 0.1712)

    }else if(scroll > 730 && scroll <= 830){
        newScroll = -730 + scroll
        console.log('f2');
        camera.position.setX( 0 )
        camera.position.setZ( 0 )

        camera.rotation.y = Math.PI - (newScroll * smallRad)

        console.log(camera.rotation);
    }else if(scroll > 830 && scroll <= 1070){
        newScroll = -830 + scroll
        console.log('f3');
        camera.position.setZ( 0 )
        camera.rotation.set(0, (smallRad*100), 0)

        camera.position.x = -newScroll * 0.3542

    }else if(scroll > 1070 && scroll <= 1170){
        newScroll = -1070 + scroll
        if(newScroll == 1170){
            camera.rotation.set(0, (smallRad*100), 0)
        }
        console.log('f4');
        camera.position.setZ( 0 )

        camera.position.x = -85 + (newScroll * 0.85)

    }else if(scroll > 1170 && scroll <= 1270){
        newScroll = -1170 + scroll
        console.log('f5');
        camera.position.setX( 0 )
        camera.position.setZ( 0 )

        camera.rotation.y = (Math.PI/2) - (newScroll * smallRad)

        console.log(camera.rotation);
    }else if(scroll > 1270 && scroll <= 1510){
        newScroll = -1270 + scroll
        console.log('f6');
        camera.position.setX( 0 )
        camera.rotation.set(0, 0, 0)

        camera.position.z = -newScroll * 0.42

    }else if(scroll > 1510 && scroll <= 1610){
        newScroll = -1510 + scroll
        if(newScroll == 1610){
            camera.rotation.set(0, 0, 0)
        }
        console.log('f7');
        camera.position.setX( 0 )
        camera.rotation.set(0, 0, 0)

        camera.position.z = -100 + newScroll

    }else if(scroll > 1610 && scroll <= 1710){
        newScroll = -1610 + scroll
        console.log('f8');
        camera.position.setX( 0 )
        camera.position.setZ( 0 )

        camera.rotation.y = - (newScroll * smallRad)

        console.log(camera.rotation);
    }else if(scroll > 1710 && scroll <= 2000){
        newScroll = -1710 + scroll
        console.log('f9');
        camera.position.setZ( 0 )
        camera.rotation.set(0, -(smallRad * 100), 0)

        camera.position.x = newScroll * 0.48

    }else if(scroll > 2000){
        camera.position.set(140, 0, 0)
    }
    console.log(camera.position);
}
document.body.onscroll = moveCamera
moveCamera()

//Animation loop
function animate(){
    if(star1){
        star1.scene.rotation.x += 0.005
    }
    if(star2){
        star2.scene.rotation.x += 0.005
    }
    if(star3){
        star3.scene.rotation.x += 0.005
    }
    if(cadeceus){
        cadeceus.scene.rotation.y += 0.01
    }
    bones.forEach(function(object){
        object.rotation.x += 0.01
        object.rotation.y += 0.01
        object.rotation.z += 0.01
    })
    requestAnimationFrame(animate)
     renderer.render(scene,camera)
  }

animate()