const canvas = document.getElementById('my-canvas')
canvas.width = 812
canvas.height = 375
const ctx = canvas.getContext('2d')
const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
let clickable = true
let endGame = false
let dateObstacle = Date.now()

const hGround = 0
const colorGround = 'brown'

const kOnada = 7464 / 2149
const onadaHeight = canvas.height
const onadaWidth = Math.floor(onadaHeight * kOnada)
const onadaY = 100

const kNuvol = 1137 / 325
const nuvolHeight = 50
const nuvolWidth = Math.floor(50 * kNuvol)
const nuvolY = 50
const nuvolX = canvas.width
