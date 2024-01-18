function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero < 2) return false;

  if (numero < 4) return true;


  if (numero % 2 === 0 || numero % 3 === 0) return false;


  return true;
}

module.exports = esNumeroPrimo;
