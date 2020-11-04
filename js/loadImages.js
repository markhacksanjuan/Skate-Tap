const kBackground = 10524 / 2480
let backgroundSurf
const skateArr = []
let skate, skateUp, skateDown
const obstacleImgArr = []


const loadImages = () => {
    const backgroundW = canvas.width
    const backgroundH = canvas.height
    const backgroundX = 0
    const backgroundY = 0
    const backgroundSurfImg = new Image()
    backgroundSurfImg.src = '../images/background_surf.jpg'
    backgroundSurf = new ImageCreation(backgroundW, backgroundH, backgroundX, backgroundY, backgroundSurfImg)
    
        // RELACION DE IMAGEN SKATE DADA LA ANCHURA
        const kSkate = 1028 / 908
        const skateW = 100
        const skateH = skateW / kSkate
        const skateX = canvas.width / 5
        const skateY = canvas.height - hGround - skateH
        // CREACIÓN DE LA IMAGEN SKATE
        const skateImg = new Image()
        skateImg.src = '../images/surfer.png'
        skate = new ImageCreation(skateW, skateH, skateX, skateY, skateImg)
        
        // RELACIÓN DE IMAGEN SKATE UP DADA LA ANCHURA
        const kSkateUp = 512 / 380
        const skateUpW = skateW
        const skateUpH = skateUpW / kSkateUp
        const skateUpX = canvas.width / 5
        const skateUpY = canvas.height - hGround - skateUpH
        // CREACIÓN DE LA IMAGEN SKATE
        const skateUpImg = new Image()
        skateUpImg.src = '../images/surfer-up.png'
        skateUp = new ImageCreation(skateUpW, skateUpH, skateUpX, skateUpY, skateUpImg)
        
        // RELACIÓN DE IMAGEN SKATE DOWN DADA LA ANCHURA
        const kSkateDown = 512 / 380
        const skateDownW = skateW
        const skateDownH = skateDownW / kSkateDown
        const skateDownX = canvas.width / 5
        const skateDownY = canvas.height - hGround - skateDownH
        // CREACIÓN DE LA IMAGEN SKATE
        const skateDownImg = new Image()
        skateDownImg.src = '../images/surfer-down.png'
        skateDown = new ImageCreation(skateDownW, skateDownH, skateDownX, skateDownY, skateDownImg)
        skateArr.push(skate, skateUp, skateDown)
        
        const carroImg = new Image()
        carroImg.src = '../images/carro.png'
        const colaImg = new Image()
        colaImg.src = '../images/cola.png'
        const rocaImg = new Image()
        rocaImg.src = '../images/roca.png'
        const rodaImg = new Image()
        rodaImg.src = '../images/roda.png'
        const tauroImg = new Image()
        tauroImg.src = '../images/tauro.png'
        obstacleImgArr.push(carroImg, colaImg, rocaImg, rodaImg, tauroImg)



}