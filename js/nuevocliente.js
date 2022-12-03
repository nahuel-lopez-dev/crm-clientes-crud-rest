// Usando una función IIFE (Immediately Invoked Function Expression) para encapsular el código
(function(){
    // Definiendo las variables
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        // Leer los datos de los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Object literal enhanced
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        
        // Validar que los campos tengan algo escrito
        if( validar(cliente) ){
            // Mostrar mensaje
            console.log('Todos los campos son obligatorios');
            return
        }

        console.log('Si pasó la validación');

    }

    function validar(obj){
        return !Object.values(obj).every( input => input !== '' );
    }

})();