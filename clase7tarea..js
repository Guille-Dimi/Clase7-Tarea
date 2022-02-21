function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Debe seleccionar una provincia'
    }
    return ''
}

function validarRegalo(regalo){
    if(regalo.length === 0){
        return 'Debe describir un regalo a recibir'
    }
    if(regalo.length >= 100){
        return 'Debe de describir el regalo con menos de 100 caracteres'
    }
    if(!/^[a-z0-9 .,]+$/i.test(regalo)){
        return 'Debe describir el regalo con solo letras y numeros'
    }
    return ''
}

