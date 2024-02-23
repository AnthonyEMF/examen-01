console.log('Ejercicio 3: Ecuacion Cuadratica');

let a = parseFloat(prompt('Ingresar primer valor'));
let b = parseFloat(prompt('Ingresar segundo valor'));
let c = parseFloat(prompt('Ingresar tercer valor'));
let x1;
let x2;

let rx = b*b-4*a*c;

if(rx>0){
    x1 = (-b+Math.sqrt(rx)) / (2*a);
    x2 = (-b-Math.sqrt(rx)) / (2*a);
}else if(rx===0){
    x1 = -b/(2*a);
    x2 = 0;
}else{
    let real = -b/(2*a);
    let imag = Math.sqrt(Math.abs(rx));
    x1 = real.toFixed(2) + " + " + imag.toFixed(2) + "i";
    x2 = real.toFixed(2) + " - " + imag.toFixed(2) + "i";
}

console.log(`Valor A: ${a}`);
console.log(`Valor B: ${b}`);
console.log(`Valor C: ${c}`);

console.log('Las soluciones son:');
console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}`);