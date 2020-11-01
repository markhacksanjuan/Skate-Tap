window.onload = () => {
  const canvas = document.getElementById('my-canvas')
  canvas.width = 700
  canvas.height = 500
  const ctx = canvas.getContext('2d')


    // -------------------- CLASS ---------------

  class BackgroundColor {
    constructor(_width, _height, _x, _y, _color){
      this.width = _width
      this.height = _height
      this.x = _x
      this.y = _y
      this.color = _color
    }
    draw = () => {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  } 
  class ImageCreation {
    constructor(_width, _height, _x, _y, _src){
      this.width = _width
      this.height = _height
      this.x = _x
        this.y = _y
        this.speedX = 0
        this.speedY = 0
        this.gravity = 0
        this.gravitySpeed = 0
        this.drag = 0.99
        this.margin = 15
        this.points = 0
        
        const img = new Image()
        img.addEventListener('load', () => {
            this.img = img
        })
        img.src = _src
    }
    draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    newPos = () => {
    this.speedY = this.speedY + (this.gravity - this.gravitySpeed)  
    this.y += this.speedY
    // this.speedY *= this.drag
    }
    hitBottom = (_groundHeight) => {
        if(this.y + this.height > (_groundHeight - 2)){
            this.speedY = 0
            this.gravity = 0
            return true
        }
        return false
    }
    right = () => {
      return this.x + this.width
    }
    left = () => {
      return this.x
    }
    top = () => {
      return this.y
    }
    bottom = () => {
      return this.y + this.height
    }
    collisionWith = (obstacle) => {
      return !(this.right() - this.margin*2 < obstacle.left() || 
              this.bottom() - this.margin < obstacle.top() ||
              this.left() + this.margin*3 > obstacle.right()
      )
    }
    passed = (obstacle) => {
      return(this.right() === (obstacle.left()))
    }
        
    }
    
    // --------------------- CREACIÓN DE OBJETOS ----------------------
    // CREACIÓN DEL FONDO
    const hGround = 50
    const colorGround = 'brown'
    
    const background = new BackgroundColor(canvas.width, hGround, 0, canvas.height - hGround, colorGround)
    const clear = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    // RELACION DE IMAGEN SKATE DADA LA ANCHURA
    const kSkate = 512 / 146
    const skateW = 100
    const skateH = skateW / kSkate
    const skateX = canvas.width / 5
    const skateY = canvas.height - hGround - skateH
    // CREACIÓN DE LA IMAGEN SKATE
    const skate = new ImageCreation(skateW, skateH, skateX, skateY, '../images/skateboard.png')
    
    // RELACIÓN DE IMAGEN SKATE UP DADA LA ANCHURA
    const kSkateUp = 512 / 380
    const skateUpW = skateW
    const skateUpH = skateUpW / kSkateUp
    const skateUpX = canvas.width / 5
    const skateUpY = canvas.height - hGround - skateUpH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateUp = new ImageCreation(skateUpW, skateUpH, skateUpX, skateUpY, '../images/skateboard_up.png')
    
    // RELACIÓN DE IMAGEN SKATE DOWN DADA LA ANCHURA
    const kSkateDown = 512 / 380
    const skateDownW = skateW
    const skateDownH = skateDownW / kSkateDown
    const skateDownX = canvas.width / 5
    const skateDownY = canvas.height - hGround - skateDownH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateDown = new ImageCreation(skateDownW, skateDownH, skateDownX, skateDownY, '../images/skateboard_down.png')
    
    
    
    // RELACION DE IMAGEN DADA LA ALTURA 
    const obstaclesArr = []
    let counter = 0
    
    // CREACIÓN DE ALTURA ALEATORIA PARA OBSTACULOS
    const createObstacles = () => {
      const kObs = 970 / 1200
      // --------------- MANIPULACION DE LA VELOCIDAD DE LOS OBJETOS
      counter += 1
      let minTime = 240
      if(counter > 720){
        minTime = 200
      }
      if(counter > 960){
        minTime = 160
      }
      if(counter > 1200){
        minTime = 120
      }
      if(counter > 1200){
        minTime = 80
      }
      // ---------- fin manipulacion de velocidad de obstaculos

      let minHeight = 35
      let maxHeight = 55
      const obsH = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
      const obsW = Math.floor(obsH * kObs)
      let maxTime = 240
      const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
      if(counter % minTime === 0){
        let obsY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        // ---- CREACION DEL OBSTACULO
        let obstaculo = new ImageCreation(obsW, obsH, canvas.width, canvas.height - hGround - obsH, '../images/rock_hand01.png')
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
    
    
    //---------------------------------- JUEGO -----------------------------------
    
    
    // ------------------------- INICIACIÓN DEL JUEGO
    const startGame = () => {
      background.draw()
      skate.draw()
      updateGameArea()
      createObstacles()
    }
    
    
    // -------------- GENERACIÓN DEL LOOP DEL JUEGO
    const updateGameArea = () => {
      clear()
      background.draw()
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
        
        // ------------- PUNTUACIÓN ---------------
  const checkPoints = () => {
    const points = obstaclesArr.some((obstacle) => {
      return skate.passed(obstacle) || skateDown.passed(obstacle) || skateUp.passed(obstacle)
    })
    if(points){
      skateDown.points++
      skateUp.points++
      skate.points++
      console.log(skate.points)
      console.log(skateDown.points)
      console.log(skateUp.points)
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
    skate.speedY = -6
    skate.gravity = 0.15
    skateUp.speedY = skate.speedY
    skateUp.gravity = skate.gravity
    skateDown.speedY = skate.speedY
    skateDown.gravity = skate.gravity
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
            
            
};
          
          
          
          
          
          
          
          
          
          
          
          
          