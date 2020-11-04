window.onload = () => {
  loadImages()

  // ----------------- BOUNDARIES -----------------------

  const checkBoundaries = () => {
    if(skateUp.top() < 0){
      for(i = 0; i < skateArr.length; i++){
        skateArr[i].y = 0
        skateArr[i].speedY = 0
        skateArr[i].gravity = .3
      }
      topBoundary()
    }
  }


        // --------------------- MOVIMIENTOS ---------------------
  const jump = () => {
    skateUp.draw()
    skateUp.hitBottom(canvas.height - hGround)
    skate.hitBottom(canvas.height - hGround)
    skateDown.hitBottom(canvas.height - hGround)
  }
  const down = () => {
    skateDown.draw()
    skateDown.hitBottom(canvas.height - hGround)
    skate.hitBottom(canvas.height - hGround)
    skateUp.hitBottom(canvas.height - hGround)
  }
  const newPos = () => {
    skate.newPos()
    skateUp.newPos()
    skateDown.newPos()
  }

  // ------------------ ANIMACIONES --------------------
  const topBoundary = () => {
    backgroundAnimation.draw()
  }
    
    
    //---------------------------------- JUEGO -----------------------------------
    
    
    // ------------------------- INICIACIÓN DEL JUEGO
  const startGame = () => {
    backgroundSurf.draw()
    skate.draw()
    updateGameArea()
    createObstacles()
  }
    
    
    // -------------- GENERACIÓN DEL LOOP DEL JUEGO
  const updateGameArea = () => {
    clear()
    backgroundSurf.draw()
    newPos()
    if(skate.speedY < 0){
      jump()
    }else if(skate.speedY === 0) {
      skate.draw()
      skate.hitBottom(canvas.height - hGround)
    }else if(skate.speedY > 0){
      down()
    }
    updateObstacles()
    checkBoundaries()
    checkPoints()
    if(checkGameOver()){return}
    writeText('black', '20px sans-serif', canvas.width*3/4, canvas.height/8, `${skate.points}`)
        
    requestAnimationFrame(updateGameArea)
  }
        
        // ------------ FIN DEL JUEGO
  const checkGameOver = () => {
    const collision = obstaclesArr.some((obstacle) => {
      return skate.collisionWith(obstacle)
    })
    if(collision){
      gameOver()
      return true
    }
  }
        
  const gameOver = () => {
    const backgroundGameOver = new BackgroundColor(canvas.width, canvas.height, 0, 0, 'black')
    backgroundGameOver.draw()
    const gameOverText = 'Sorry dude... it\'s over! '
    writeText('red', '50px sans-serif', canvas.width/2, canvas.height/3, gameOverText)
    
  }
        
        // ---------------- PUNTUACIÓN ------------------
  const checkPoints = () => {
    const points = obstaclesArr.some((obstacle) => {
      return skate.passed(obstacle) || skateDown.passed(obstacle) || skateUp.passed(obstacle)
    })
    if(points){
      skateDown.points++
      skateUp.points++
      skate.points++
    }
  }
  const writeText = (_color, _font, _x, _y, _text) => {
    ctx.font = _font
    ctx.fillStyle = _color
    ctx.textAlign = 'center'
    ctx.fillText(_text, _x, _y)
  }
        
        
        // ------------- KEYBOARD ------------------
        
//   document.getElementById("start-game").onclick = () => {
  //     startGame()
  //   };
  document.getElementById("start-game").addEventListener('click', () => {
    startGame()
  })
  document.getElementById("my-canvas").addEventListener('click', () => {
    for(i = 0; i < skateArr.length; i++){
      skateArr[i].speedY = -6
      skateArr[i].gravity = 0.15
    }
  })
          
          
          
  document.addEventListener('keydown', (event) => {
  // if(event.key === 'ArrowUp'){
    //   bird.speedY = -2
    //   bird.gravitySpeed = 0.3
    // }
  })
  document.addEventListener('keyup', () => {
    // bird.gravitySpeed = 0
  })           
}
          
          
          
          
          
          
          
          
          
          
          
          
          