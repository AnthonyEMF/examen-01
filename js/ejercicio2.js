console.log('Ejercicio 2: Registro de Alumnos');

let listaAlumnos = [];

function aprobacion(nota){
    if(nota>=65){
        return "Aprobado";
    }else{
        return "Reprobado";
    }
}

while(true){
    let nombre = prompt("Ingrese el nombre del alumno");
    let edad = parseInt(prompt("Ingrese la edad del alumno"));
    let nota = parseFloat(prompt("Ingrese la calificación del alumno"));
    let alumno = {
        nombre: nombre,
        edad: edad,
        nota: nota,
        estado: aprobacion(nota)
    };
    listaAlumnos.push(alumno);

    let op = prompt("Desea agregar otro alumno? (s/n)");
    if(op!=='s'){
        break;
    }
}

console.log("Lista de alumnos:");
listaAlumnos.forEach((alumno,n) => {
    console.log(`${n+1}. Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Nota: ${alumno.nota} - ${alumno.estado}\n`);
});