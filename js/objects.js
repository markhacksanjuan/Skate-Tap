// RELACION DE IMAGEN DADA LA ALTURA 
const obstaclesArr = []
let counter = 0

// CREACIÓN DE ALTURA ALEATORIA PARA OBSTACULOS
const createObstacles = () => {
    const kObs = 835 / 718
    // --------------- MANIPULACION DE LA VELOCIDAD DE LOS OBJETOS
    let time = 3000
    let minHeight = 50
    let maxHeight = 90
    let minY = 200
    let maxY = canvas.height
    const maxObs = obstacleImgArr.length
    // let obsY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    // ---- CREACION DEL OBSTACULO
    if(Date.now() - dateObstacle >= time){
        dateObstacle = Date.now()
        const obsH = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        const obsW = Math.floor(obsH * kObs)
        const obsY = Math.floor(Math.random() * (maxY - minY + 1) + minY)
        const randomObs = Math.floor(Math.random() * (maxObs))
        let obstaculo = new ImageCreation(obsW, obsH, canvas.width, obsY - hGround - obsH, obstacleImgArr[randomObs])
        obstaclesArr.push(obstaculo)
        time -= 200
    }

}

let nuvolsArr = []
const createNuvols = () => {
    const maxNuvol = nuvolsImgArr.length
    
    setInterval(()=> {
        const randomNuvol = Math.floor(Math.random() * (maxNuvol))
        let newNuvol = new ImageCreation(nuvolWidth, nuvolHeight, nuvolX, nuvolY, nuvolsImgArr[randomNuvol])
        nuvolsArr.push(newNuvol)

    },4000)




}

// ---------- MOVIMIENTO DE LOS OBSTACULOS -------
 

