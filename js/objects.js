// RELACION DE IMAGEN DADA LA ALTURA 
const obstaclesArr = []
let counter = 0

// CREACIÓN DE ALTURA ALEATORIA PARA OBSTACULOS
const createObstacles = () => {
    const kObs = 835 / 718
    // --------------- MANIPULACION DE LA VELOCIDAD DE LOS OBJETOS
    counter += 1
    let minTime = 120

    let minHeight = 50
    let maxHeight = 90
    const obsH = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    const obsW = Math.floor(obsH * kObs)
    let minY = 200
    let maxY = canvas.height
    const obsY = Math.floor(Math.random() * (maxY - minY + 1) + minY)
    let maxTime = 240
    const maxObs = obstacleImgArr.length
    const randomObs = Math.floor(Math.random() * (maxObs))
    if(counter % minTime === 0){
        // let obsY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    // ---- CREACION DEL OBSTACULO
        let obstaculo = new ImageCreation(obsW, obsH, canvas.width, obsY - hGround - obsH, obstacleImgArr[randomObs])
        obstaclesArr.push(obstaculo)
    }
}
// ---------- MOVIMIENTO DE LOS OBSTACULOS -------
const updateObstacles = () => {
    for(i = 0; i < obstaclesArr.length; i++){
        obstaclesArr[i].x -= 2
        obstaclesArr[i].draw()
    }
    createObstacles()
} 

