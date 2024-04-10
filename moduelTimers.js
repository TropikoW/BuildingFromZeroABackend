// function showIssue(issue) {
//     console.log(`i'm learning ${issue}`);
// }

// showIssue('node.js')

// func / delay / args
// setTimeout(showIssue,3000,'node.js'); <- se ejecuta después de 3 segundos, toma un solo argumento
// setTimeout(add,3000,5,5);  <- se ejecuta después de 3 segundos, toma dos argumentos

// func / args (Because it's async)
// setImmediate(add,5,5); <- se ejecuta como funcion asincrona por lo que se renderiza despues de que todo el codigo compile y devuelve la respuesta inmediatamente despues, toma uno ó dos argumentos

function add(a,b) {
  console.log(a + b);
}

setInterval(add,1000,5,5);
