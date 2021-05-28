// Unit test:pruebas unitarias para cada funcion
// centrado en la logica y los datos del componente o funcion

// playground
// MOCHA framework de testeo de ejecucion y reporte de los test c¿que vamos a crear
// CHAI libreria para saber si los ejercicios fueron resueltos de forma correcta
// libreria de ascerciones- predicados que devuelven verdadero o falso

// DESCRIBE PARA DEFINIR BLOQUES DE PRUEBAS RELACIONADAS ENTRE SI
// ITcada una de esas prubas. podemos definir muchas dentro de cada elemento describe

// EXPECT para comparar valores dentro de los test

// PARA TESTEAR EL PRIMER EJERCICIO DE PLAYGROUND. Console.log('Hola')
// Cada elemento IT es un prueba.

it('Debes llamar a la funcion console.log',()=>{
    expect(useConsole).to.be.true;
    // en esta caso le decimos que espere que se use la consola, si eso esta bien pasa a la siguiente prueba
})

it('Debes llamar a la funcion console.log pasando la palabra hola',()=>{
    expect(passedString).to.be.equal('Hola');
    // ahora que sabemos que se uso la consola debemos ver si se puso el string "hola" 
})