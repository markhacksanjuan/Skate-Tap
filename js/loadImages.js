const kBackground = 10524 / 2480
let backgroundSurf
const skateArr = []
let skate, skateUp, skateDown
const obstacleImgArr = []
const nuvolsImgArr = []

let onada, onada2


const loadImages = () => {
    const backgroundW = canvas.width
    const backgroundH = canvas.height
    const backgroundX = 0
    const backgroundY = 0
    const backgroundSurfImg = new Image()
    backgroundSurfImg.src = './images/background_surf.jpg'
    backgroundSurf = new ImageCreation(backgroundW, backgroundH, backgroundX, backgroundY, backgroundSurfImg)
    
        // RELACION DE IMAGEN SKATE DADA LA ANCHURA
        const kSkate = 1028 / 908
        const skateW = 75
        const skateH = Math.floor(skateW / kSkate)
        const skateX = Math.floor(canvas.width / 5)
        const skateY = canvas.height/2
        // CREACIÓN DE LA IMAGEN SKATE
        const skateImg = new Image()
        skateImg.src = './images/surfer.png'
        skate = new ImageCreation(skateW, skateH, skateX, skateY, skateImg)
        
        // RELACIÓN DE IMAGEN SKATE UP DADA LA ANCHURA
        const kSkateUp = 512 / 380
        const skateUpW = skateW
        const skateUpH = skateH
        const skateUpX = skateX
        const skateUpY = skateY
        // CREACIÓN DE LA IMAGEN SKATE
        const skateUpImg = new Image()
        skateUpImg.src = './images/surfer-up.png'
        skateUp = new ImageCreation(skateUpW, skateUpH, skateUpX, skateUpY, skateUpImg)
        
        // RELACIÓN DE IMAGEN SKATE DOWN DADA LA ANCHURA
        const kSkateDown = 512 / 380
        const skateDownW = skateW
        const skateDownH = skateH
        const skateDownX = skateX
        const skateDownY = skateY
        // CREACIÓN DE LA IMAGEN SKATE
        const skateDownImg = new Image()
        skateDownImg.src = './images/surfer-down.png'
        skateDown = new ImageCreation(skateDownW, skateDownH, skateDownX, skateDownY, skateDownImg)
        skateArr.push(skate, skateUp, skateDown)
        
        const carroImg = new Image()
        carroImg.src = './images/carro.png'
        const colaImg = new Image()
        colaImg.src = './images/cola.png'
        const rocaImg = new Image()
        rocaImg.src = './images/roca.png'
        const rodaImg = new Image()
        rodaImg.src = './images/roda.png'
        const tauroImg = new Image()
        tauroImg.src = './images/tauro.png'
        obstacleImgArr.push(carroImg, colaImg, rocaImg, rodaImg, tauroImg)

        const nuvol1Img = new Image()
        nuvol1Img.src = './images/nuvol-1.png'
        const nuvol2Img = new Image()
        nuvol2Img.src = './images/nuvol-2.png'

        nuvolsImgArr.push(nuvol1Img, nuvol2Img)

        const onadaImg = new Image()
        onadaImg.src = './images/onada.png'
        onada = new ImageCreation(onadaWidth, onadaHeight, 0, onadaY, onadaImg)
        onada2 = new ImageCreation(onadaWidth, onadaHeight, onadaWidth, onadaY, onadaImg)

}