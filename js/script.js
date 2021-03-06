const startGame = () => {
  dateObstacle = Date.now()
  backgroundSurf.draw()
  skate.draw()
  onada.draw()
  createObstacles()
  createNuvols()
  muteButton()
  updateGameArea()
  
}
const gameOver = () => {
  const backgroundGameOver = new BackgroundColor(canvas.width, canvas.height, 0, 0, '#9AE3FE')
  backgroundGameOver.draw()
  const gameOverText = 'Sorry dude... it\'s over! '
  writeText('#f7aa00', '50px sans-serif', canvas.width/2, canvas.height/3, gameOverText)
  // writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*5/6, `${skate.points}`)

  if(skate.points < 1000){
    writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*2/3, `Nice try...`)
  }else if(skate.points >= 1000 && skate.points < 3000){
    writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*2/3, `Not bad...`)
  }else if(skate.points >= 3000 && skate.points < 5000){
    writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*2/3, `Cool man!...`)
  }else if(skate.points >= 6000 && skate.points < 10000){
    writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*2/3, `Wow!!!...`)
  }else if(skate.points >= 10000){
    writeText('#f7aa00', '30px sans-serif', canvas.width/2, canvas.height*2/3, `Master surfer!!!...`)
  }
  muteButton()
  writeScore()
}


// ----------------- BOUNDARIES -----------------------

const checkBoundaries = () => {
  if(skateUp.top() < onadaY - 60){
    for(i = 0; i < skateArr.length; i++){
      skateArr[i].y = onadaY - 20
      skateArr[i].speedY = 0
        skateArr[i].gravity = .01
      }
    }
    if(skateDown.bottom() > canvas.height){
      skateArr.forEach(skate => {
        skate.speedY = 0
        skate.gravity = 0
      })
    }
  }
  
  
  // --------------------- MOVIMIENTOS ---------------------
  const jump = () => {
    skateUp.draw()
    
  }
  const down = () => {
    skateDown.draw()
    
  }
  const newPos = () => {
    skateArr.forEach(skate => {
      skate.newPos()
    })
  }    
  // -------------- GENERACIÓN DEL LOOP DEL JUEGO
    const updateGameArea = () => {
      if(!endGame){
        backgroundSurf.draw()
        moveOnada()
        onada.draw()
        onada2.draw()
        moveNuvols()
        newPos()
        if(skate.speedY < 0){
          jump()
        }else if(skate.speedY === 0) {
          skate.draw()
          skate.hitBottom(canvas.height - hGround)
        }else if(skate.speedY > 0){
          down()
        }
        createObstacles()
        updateObstacles()
        checkBoundaries()
        // checkPoints()
        skate.points++
        checkGameOver()
        writeText('black', '24px sans-serif', canvas.width*7/8, canvas.height/15, `score: ${skate.points}`)
            
        requestAnimationFrame(updateGameArea)
      }else {
        gameOver()
        clickable = true
      }
    }
// ------------ FIN DEL JUEGO
const checkGameOver = () => {
  const collision = obstaclesArr.some((obstacle) => {
    return skate.collisionWith(obstacle)
  })
  if(collision){
    endGame = true
  }
}
const writeText = (_color, _font, _x, _y, _text) => {
  ctx.font = _font
  ctx.fillStyle = _color
  ctx.textAlign = 'center'
  ctx.fillText(_text, _x, _y)
}


          
          
          
          
          
          
          
          
          
          
          