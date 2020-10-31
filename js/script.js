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
            this.gravity = 0.1
            this.gravitySpeed = 0
            this.drag = 0.99
            
            const img = new Image()
            img.addEventListener('load', () => {
                this.img = img
            })
            img.src = _src
            }
            draw = () => {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            }
            update = () => {
    
            }
            newPos = () => {
            this.speedY = this.speedY + (this.gravity - this.gravitySpeed)  
            this.y += this.speedY
            // this.speedY *= this.drag
            }
            hitBottom = (_groundHeight) => {
                if(this.y + this.height > _groundHeight){
                    this.speedY = 0
                    this.gravity = 0
                }
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

    // RELACION DE IMAGEN DADA LA ALTURA
    const kSkate = 512 / 146
    const skateH = 20
    const skateW = skateH * kSkate
    const skateX = canvas.width / 5
    const skateY = canvas.height - hGround - skateH
    // CREACIÓN DE LA IMAGEN BIRD
    const skate = new ImageCreation(skateW, skateH, skateX, skateY, '/images/skateboard.png')
  
    // RELACION DE IMAGEN DADA LA ALTURA tubH
    const obstaclesArr = []
    let counter = 0
    
    // CREACIÓN DE ALTURA ALEATORIA PARA TUBERIAS
    // const createObstacles = () => {
    //   const kTub = 138 / 793
    //   const tubH = 300
    //   const tubW = Math.floor(tubH * kTub)
    //   counter += 1
    //   let gap = 50
    //   let minHeight = 100
    //   let maxHeight = canvas.height - gap
    //   if(counter % 120 === 0){
    //     let tubY = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    //     //CREACION DE LA TUBERIA INFERIOR
    //     let tuberia = new ImageCreation(tubW, tubH, canvas.width, tubY, '/images/obstacle_bottom.png')
    //     obstaclesArr.push(tuberia)
    //     console.log(tuberia)
    //   }
    // }
    // ---------- MOVIMIENTO DE LAS TUBERIAS -------
    // const updateObstacles = () => {
    //   for(i = 0; i < obstaclesArr.length; i++){
    //     obstaclesArr[i].x -= 2
    //     obstaclesArr[i].print()
    //   }
    //   createObstacles()
    // }
      
      
      //------------------- JUEGO ---------------------
      
      
      // INICIACIÓN DEL JUEGO
      const startGame = () => {
          backgroundPrint()
          skate.draw()
        updateGameArea()
        // createObstacles()
      }
    //   GENERACIÓN DEL LOOP DEL JUEGO
      const updateGameArea = () => {
          clear()
          backgroundPrint()
          skate.draw()
          skate.newPos()
          skate.hitBottom(canvas.height - hGround)
        // updateObstacles()
  
      requestAnimationFrame(updateGameArea)
    }
  
  
      // ------------- KEYBOARD ------------------
  
    //   document.getElementById("start-game").onclick = () => {
    //     startGame()
    //   };
      document.getElementById("start-game").addEventListener('click', () => {
          startGame()
      })
      document.getElementById("my-canvas").addEventListener('click', () => {
        skate.speedY = -3
        skate.gravity = 0.1
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
  
  
  
  
  
  
  
  
  
  
  
  
  