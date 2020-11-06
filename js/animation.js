const moveOnada = () => {
    if(onada.x < (onada.width * -1)){
        onada.x = 0
        onada2.x = onada.width
    }
    onada.x -= 1.5
    onada2.x -= 1.5
}
const moveNuvols = () => {
    
        nuvolsArr.forEach(nuvol => {
            nuvol.x -= 1.2
            nuvol.draw()
    })
}
const updateObstacles = () => {
            
        obstaclesArr.forEach(obstacle => {
            obstacle.speedX = 2
            obstacle.newPosX()
            obstacle.draw()
        })
}

const muteButton = () => {
    const startGame = document.getElementById('start-game')
    startGame.classList.toggle('text-muted')
    if(endGame){
        startGame.innerText = 'RESTART'
    }else {
        startGame.innerText = 'LET\'S SURF'
    }
}

const writeScore = () => {
    const ul = document.getElementById('score')
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'list-group-item bg-transparent')
    newLi.innerText = `${skate.points}`
    ul.appendChild(newLi)


}