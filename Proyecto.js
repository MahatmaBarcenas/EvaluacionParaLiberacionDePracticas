var Maria = {
    nombre: 'Maria',
    apellido: "Sanchez",
    edad: 38,
    peso: 78
}

const SubeDePeso = persona =>  persona.peso = persona.peso + 0.2;

const BajaDePeso = persona =>  persona.peso = persona.peso - 0.2;

function imprimirDatos(persona) {
    console.log(`Al inico del año ${persona.nombre} ${persona.apellido} pesaba ${persona.peso} kg`);
    //console.log(Math.random()); ----> Esta instruccion la tenia de prueba, para comprobar que los numeros aleatorios funcionaban bien.

   const Adelgazar = 0.5;

   const Aumentar = 0.25;

    for (i = 1; i <= 365; i++) {

        Aleatorio = Math.random();

        if(Aleatorio <= Aumentar){
            SubeDePeso(persona);
        }
        else if(Aleatorio <= Adelgazar){
            BajaDePeso(persona);
        }
       

   
    }
   
    console.log(`Al final del año ${persona.nombre} ${persona.apellido} pesa `+ persona.peso.toFixed(2) + ` kg`);

}

imprimirDatos(Maria);
