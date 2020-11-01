const canvas = document.getElementById('my-canvas')
canvas.width = 700
canvas.height = 500
const ctx = canvas.getContext('2d')
const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
const hGround = 50
const colorGround = 'brown'
