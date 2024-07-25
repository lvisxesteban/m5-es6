"use strict";

var _Cliente = _interopRequireDefault(require("./src/Cliente.js"));
var _impuesto = _interopRequireDefault(require("./src/impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuesto1 = new _impuesto["default"](900000, 92000); // (montoBrutoAnual, deducciones)
var cliente1 = new _Cliente["default"]('Marcelo Salas', impuesto1); // (nombre, impuesto)

console.log("El cliente ".concat(cliente1.nombre, " debe pagar un impuesto de: ").concat(cliente1.calcularImpuesto()));