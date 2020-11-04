// DEFINO LA CLASE IMAGENES

class Background {
    constructor(_width, _height, _x, _y, _src){

    }
}
    // ----------------------- CLASS ---------------------

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

    // ----------------------- IMAGE CLASS -----------------

class ImageCreation {
  constructor(_width, _height, _x, _y, _img){
    this.width = _width
    this.height = _height
    this.x = _x
    this.y = _y
    this.speedX = 0
    this.speedY = 0
    this.img = _img
    this.gravity = 0
    this.gravitySpeed = 0
    this.drag = 0.99
    this.margin = 15
    this.points = 0
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
            this.left() + this.margin*3 > obstacle.right() ||
            this.top() + this.margin > obstacle.bottom()
    )
  }
  passed = (obstacle) => {
    return(this.right() === obstacle.left() && this.bottom() < obstacle.top())
  }          
}

    













