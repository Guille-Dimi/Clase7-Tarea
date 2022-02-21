function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debe seleccionar una provincia',
        'Validar ciudad no validó que el usuario elija una provincia',
    )
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad no validó correctamente una ciudad valida'
    )
}

probarValidarCiudad()
