console.log('Ejercicio 1: Planilla');

let planilla = {
    numero: "",
    empresa: "",
    empleados: [],
    totalPlanilla: 0
};

function ingresarEmpleado() {
    let nombre = prompt("Ingrese el nombre del empleado");
    let salarioBase = parseFloat(prompt("Ingrese el salario base del empleado"));
    let adelanto = parseFloat(prompt("Ingrese el adelanto del empleado"));
    let prestamo = parseFloat(prompt("Ingrese el prestamo del empleado"));

    let IHSS = salarioBase*0.035;
    let INFOP = salarioBase*0.015;
    let salarioNeto = salarioBase - IHSS - INFOP - adelanto - prestamo;

    planilla.empleados.push({
        nombre: nombre,
        salarioBase: salarioBase,
        ihss: IHSS,
        infop: INFOP,
        adelanto: adelanto,
        prestamo: prestamo,
        totalPagar: salarioNeto
    });
    planilla.totalPlanilla += salarioBase;
}

planilla.numero = prompt("Ingrese el numero de planilla");
planilla.empresa = prompt("Ingrese el nombre de la empresa");

while(true){
    ingresarEmpleado();
    let op = prompt("Desea ingresar un nuevo empleado? (s/n)");
    if (op!=='s'){
        break;
    }
}

console.log("Numero:", planilla.numero);
console.log("Empresa:", planilla.empresa);
console.log("Empleados:");
console.log("Nombre\t\tSueldo Base\tIHSS\tINFOP\tAdelanto\tPréstamo\tTotal a Pagar");
planilla.empleados.forEach((empleado,n) => {
    console.log(`${n+1}. ${empleado.nombre}\t${empleado.salarioBase}\t\t${empleado.ihss}\t\t${empleado.infop}\t${empleado.adelanto}\t\t${empleado.prestamo}\t\t${empleado.totalPagar}`);
});
console.log("Total de la Planilla:", planilla.totalPlanilla);