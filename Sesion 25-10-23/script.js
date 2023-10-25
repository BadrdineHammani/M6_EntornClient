function encontrarPrimerMiercoles(año1, año2) {
    for (let year = Math.min(año1, año2); year <= Math.max(año1,año2); year++) {
      const firstDay = new Date(year, 0, 1).getDay(); // 0 para domingo, 1 para lunes, 2 para martes, etc.
      if (firstDay === 3) {
        return year;
      }
    }
    return null;
  }
  
  const año1 = parseInt(prompt("Introduce el primer año entre 2000 y 2050:"));
  const año2 = parseInt(prompt("Introduce el segundo año entre 2000 y 2050:"));
  
  if (año1 >= 2000 && año1 <= 2050 && año2 >= 2000 && año2 <= 2050) {
    const primerMiercoles = encontrarPrimerMiercoles(año1, año2);
  
    if (primerMiercoles !== null) {
      alert(`El primer año con un primer día de la semana en miércoles entre ${año1} y ${año2} es ${primerMiercoles}.`);
    } else {
      alert("No se encontró ningún año que cumpla con la condición.");
    }
  } else {
    alert("Por favor, ingresa años válidos entre 2000 y 2050.");
  }
  