import Cliente from './src/Cliente.js';
import Impuesto from './src/impuesto.js';


let impuesto1 = new Impuesto(900000, 92000); // (montoBrutoAnual, deducciones)
let cliente1 = new Cliente('Marcelo Salas', impuesto1); // (nombre, impuesto)


console.log(`El cliente ${cliente1.nombre} debe pagar un impuesto de: ${cliente1.calcularImpuesto()}`);
