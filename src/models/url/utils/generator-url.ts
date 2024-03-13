export function generatorUrl(long: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < long; i++) {
    const indiceAleatorio = Math.floor(Math.random() * characters.length);
    result += characters.charAt(indiceAleatorio);
  }

  return result;
}
