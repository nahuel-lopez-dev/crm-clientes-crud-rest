import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

// Usando una función IIFE (Immediately Invoked Function Expression) para encapsular el código
(function(){
    // Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        // Submit al formulario
        formulario.addEventListener('submit', validarCliente);
    });
    
    function mostrarCliente(cliente){
        const { nombre, email, telefono, empresa, id } = cliente;
           
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();

        // Object literal enhanced
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        
        // Validar que los campos tengan algo escrito
        if( validar(cliente) ){
            // Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }

        // Reescribe el objeto
        editarCliente(cliente);
    }

})();