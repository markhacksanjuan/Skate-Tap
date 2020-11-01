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
        this.points = 0
    }
        draw(){
            console.log(this)
            ctx.fillStyle = this.color
            ctx.fillRect = (this.x, this.y, this.width, this.height)
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
              return(this.right() === (obstacle.left() + obstacle.width))
            }
        
    }
    


    // --------------------- CREACIÓN DE OBJETOS ----------------------
    // CREACIÓN DEL FONDO

    // const backgroundObj = new BackgroundColor(50, 50, 50, 50, 'aqua')
    // backgroundObj.draw()
    const hGround = 50
    const backgroundPrint = () => {
        ctx.fillStyle = 'brown'
        ctx.fillRect(0,canvas.height - hGround,canvas.width, hGround)
    }
    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height - hGround)
    }

    // RELACION DE IMAGEN DADA LA ANCHURA
    const kSkate = 512 / 146
    const skateW = 100
    const skateH = skateW / kSkate
    const skateX = canvas.width / 5
    const skateY = canvas.height - hGround - skateH
    // CREACIÓN DE LA IMAGEN SKATE
    const skate = new ImageCreation(skateW, skateH, skateX, skateY, '/images/skateboard.png')

    // RELACIÓN DE IMAGEN SKATE UP DADA LA ANCHURA
    const kSkateUp = 512 / 380
    const skateUpW = skateW
    const skateUpH = skateUpW / kSkateUp
    const skateUpX = canvas.width / 5
    const skateUpY = canvas.height - hGround - skateUpH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateUp = new ImageCreation(skateUpW, skateUpH, skateUpX, skateUpY, '/images/skateboard_up.png')

    // RELACIÓN DE IMAGEN SKATE DOWN DADA LA ANCHURA
    const kSkateDown = 512 / 380
    const skateDownW = skateW
    const skateDownH = skateDownW / kSkateDown
    const skateDownX = canvas.width / 5
    const skateDownY = canvas.height - hGround - skateDownH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateDown = new ImageCreation(skateDownW, skateDownH, skateDownX, skateDownY, '/images/skateboard_down.png')


  
    // RELACION DE IMAGEN DADA LA ALTURA tubH
    const obstaclesArr = []
    let counter = 0
    
    // CREACIÓN DE ALTURA ALEATORIA PARA TUBERIAS
    const createObstacles = () => {
      const kObs = 970 / 1200
      counter += 1
      let minHeight = 30
      let maxHeight = 55
      const obsH = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
      const obsW = Math.floor(obsH * kObs)
      let minTime = 200
      let maxTime = 240
      const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
      if(counter % minTime === 0){
        let obsY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        //CREACION DE LA TUBERIA INFERIOR
        let obstaculo = new ImageCreation(obsW, obsH, canvas.width, canvas.height - hGround - obsH, '/images/rock_hand01.png')
        obstaclesArr.push(obstaculo)
      }
    }
    // ---------- MOVIMIENTO DE LAS TUBERIAS -------
    const updateObstacles = () => {
      for(i = 0; i < obstaclesArr.length; i++){
        obstaclesArr[i].x -= 2
        obstaclesArr[i].draw()
      }
      createObstacles()
    }


    // ------------------------- COLISION ------------------------------




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
      
      
      //------------------- JUEGO ---------------------
      
      
      // -------------- INICIACIÓN DEL JUEGO
      const startGame = () => {
        backgroundPrint()
          skate.draw()
          updateGameArea()
          createObstacles()
          console.log(skate.right())
        }

        
        // -------------- GENERACIÓN DEL LOOP DEL JUEGO
        const updateGameArea = () => {
          clear()
          backgroundPrint()
          skate.newPos()
          skateUp.newPos()
          skateDown.newPos()
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
          const backgroundGameOver = new BackgroundColor(canvas.width, canvas.height, 0, 0, 'rgba(0, 0, 0, 0.5)')
          backgroundGameOver.draw()
          const gameOverText = 'Sorry dude... it\'s over! '
          writeText('red', '50px sans-serif', canvas.width/2, canvas.height/3, gameOverText)

        }


        // ------------- PUNTUACIÓN ---------------
        const checkPoints = () => {
          const points = obstaclesArr.some((obstacle) => {
            return skate.passed(obstacle) || skateDown.passed(obstacle)
          })
          if(points){
            skate.points++
            console.log(skate.points)
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
          
          
          
          
          
          
          
          
          
          
          
          
          