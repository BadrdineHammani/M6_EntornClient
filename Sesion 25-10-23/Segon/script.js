function contieneTodasLasVocales(palabra) {
    // Convierte la palabra a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
    palabra = palabra.toLowerCase();
    
    // Usamos una expresión regular para buscar todas las formas de las vocales (incluyendo acentos y diéresis)
    const regex = /[aeiouáéíóúäëïöü]/g;
    const vocalesEncontradas = palabra.match(regex);
    
    // Verificamos si se encontraron todas las vocales
    return new Set(vocalesEncontradas).size === 5;
  }
  
  const palabra = prompt("Introduce una palabra:"); // Solicita al usuario que ingrese una palabra
  
  if (contieneTodasLasVocales(palabra)) {
    alert(`La palabra "${palabra}" contiene todas las vocales.`);
  } else {
    alert(`La palabra "${palabra}" no contiene todas las vocales.`);
  }
  