// 1 tirada , 10 frames con roll1 y roll2, último frame con tiro extra roll3
function bowling (tirada) {
    if (!Array.isArray(tirada)) throw TypeError('tirada debe ser un array')
    let sumaBase = 0
    tirada.forEach((frame => {
        sumaBase += frame.reduce((acum, elem) => acum + elem, 0)
    }))

    for (let i = 0; i< tirada.length-1; i++) {
      if (tirada[i].reduce((acum,elem) => acum + elem,0) == 10) {
        if (tirada[i][0] == 10){
            sumaBase += i != 8 ? tirada[i+1].reduce((acum,elem) => acum + elem,0) : tirada[9][0] + tirada[9][1]   
        } else {
            sumaBase += tirada[i+1][0]
        }
      }
    }
    /*  8    9   10  secuencias
        X    X   XX  
        X    X   X-  
        -    X   XX
        -    X   X-
    */
    if (tirada[7][0] == 10 && tirada[8][0] == 10 && tirada[9][0] == 10 && tirada[9][1] == 10){
        sumaBase += 80
    }
    else if (tirada[7][0] == 10 && tirada[8][0] == 10 && tirada[9][0] == 10 && tirada[9][1] != 10){
        sumaBase += 60
    }
    if (tirada[7][0] != 10 && tirada[8][0] == 10 && tirada[9][0] == 10 && tirada[9][1] == 10){
        sumaBase += 30
    }
    else if (tirada[7][0] != 10 && tirada[8][0] == 10 && tirada[9][0] == 10 && tirada[9][1] != 10){
        sumaBase += 10
    }    

    return sumaBase
}

module.exports = {
    bowling
}