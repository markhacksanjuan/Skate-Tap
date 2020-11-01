// RELACION DE IMAGEN DADA LA ALTURA 
const obstaclesArr = []
let counter = 0

// CREACIÓN DE ALTURA ALEATORIA PARA OBSTACULOS
const createObstacles = () => {
    const kObs = 970 / 1200
    // --------------- MANIPULACION DE LA VELOCIDAD DE LOS OBJETOS
    counter += 1
    let minTime = 120
    // if(counter > 720){
    //     minTime = 200
    // }
    // if(counter > 960){
    //     minTime = 160
    // }
    // if(counter > 1200){
    //     minTime = 120
    // }
    // if(counter > 1200){
    //     minTime = 80
    // }
    // ---------- fin manipulacion de velocidad de obstaculos

    let minHeight = 50
    let maxHeight = 90
    const obsH = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    const obsW = Math.floor(obsH * kObs)
    let minY = 200
    let maxY = canvas.height
    const obsY = Math.floor(Math.random() * (maxY - minY + 1) + minY)
    let maxTime = 240
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
    if(counter % minTime === 0){
        // let obsY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    // ---- CREACION DEL OBSTACULO
        let obstaculo = new ImageCreation(obsW, obsH, canvas.width, obsY - hGround - obsH, './images/rock_hand01.png')
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

