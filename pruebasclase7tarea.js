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

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'Debe describir un regalo a recibir',
        'Validar regalo no validó que el usuario no escribiera nada',
    )
    console.assert(
        validarRegalo('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf') ===
        'Debe de describir el regalo con menos de 100 caracteres',
        'Validar regalo no validó que el usuario escribiera un regalo de mas de 100 caracteres'
    )
    console.assert(
        validarRegalo('Un pinche helicoptero con champagne') === '',
        'Validar regalo no validó correctamente un regalo valido'
    )
    console.assert(
        validarRegalo('$_dsa+') === 'Debe describir el regalo con solo letras y numeros',
        'Validar regalo no validó que solo tuviera letras y numeros'
    )
}

probarValidarRegalo()
