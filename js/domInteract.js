
window.onload = () => {
    document.getElementById("start-game").addEventListener('click', () => {
      if(clickable){
        clickable = false
        endGame = false
        obstaclesArr.length = 0
        nuvolsArr.length = 0
        skate.points = 0
        startGame()
      }
    })
    document.getElementById("my-canvas").addEventListener('click', () => {
      for(i = 0; i < skateArr.length; i++){
        skateArr[i].speedY = -5
        skateArr[i].gravity = 0.15
      }
    })         
}

