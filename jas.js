function hora(){
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let res = document.getElementById('res')
    let img = document.getElementById('img')
    res.innerHTML = `${hora} : ${min}`
    if(hora > 00 && hora < 12){
        img.src = 'manha.jpg'
        res.innerHTML += '<p>Agora esta de manha</p>'
    }else if(hora >= 12 && hora <= 18){
         img.src = 'tarde.jpg'
         res.innerHTML += '<p>Agora esta de tarde </p>'
    }else{
        img.src = 'noite.jpg'
        res.innerHTML += '<p>Agora esta de noite </p>'

    }
}

