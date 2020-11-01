          // --------------------- CREACIÓN DE OBJETOS ----------------------
      const skateArr = []
    // RELACION DE IMAGEN SKATE DADA LA ANCHURA
    const kSkate = 512 / 146
    const skateW = 100
    const skateH = skateW / kSkate
    const skateX = canvas.width / 5
    const skateY = canvas.height - hGround - skateH
    // CREACIÓN DE LA IMAGEN SKATE
    const skate = new ImageCreation(skateW, skateH, skateX, skateY, './images/skateboard.png')
    
    // RELACIÓN DE IMAGEN SKATE UP DADA LA ANCHURA
    const kSkateUp = 512 / 380
    const skateUpW = skateW
    const skateUpH = skateUpW / kSkateUp
    const skateUpX = canvas.width / 5
    const skateUpY = canvas.height - hGround - skateUpH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateUp = new ImageCreation(skateUpW, skateUpH, skateUpX, skateUpY, './images/skateboard_up.png')
    
    // RELACIÓN DE IMAGEN SKATE DOWN DADA LA ANCHURA
    const kSkateDown = 512 / 380
    const skateDownW = skateW
    const skateDownH = skateDownW / kSkateDown
    const skateDownX = canvas.width / 5
    const skateDownY = canvas.height - hGround - skateDownH
    // CREACIÓN DE LA IMAGEN SKATE
    const skateDown = new ImageCreation(skateDownW, skateDownH, skateDownX, skateDownY, './images/skateboard_down.png')

    skateArr.push(skate, skateUp, skateDown)