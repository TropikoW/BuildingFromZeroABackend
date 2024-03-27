function saludar(nombre) {
  return `Hola ${nombre}!`;
}

function saludarHelloWorld() {
  return `Hello World!`;
}

// Exportar funciones
module.exports = {
  saludar : saludar,
  saludarHelloWorld : saludarHelloWorld
}