const suma = (x: number, y: number) => x + y;
const nombreCompleto = (nombre: string, apellidos: string) => `${nombre} ${apellidos}`;

alert(`Te llamas ${nombreCompleto("Laura", "Ortega")} y tu número favorito es ${suma(3, 5)}`);