function saludar(nombre) {
  return `Hola ${nombre}!`;
}

function saludarHelloWorld(nombre) {
  return `Hello World!, ${nombre}`;
}

// Exportar funciones
module.exports = {
  saludar : saludar,
  saludarHelloWorld : saludarHelloWorld
}