const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");

const frases = [
  "¡Tu web ya tiene JavaScript!",
  "Sigue así: estás aprendiendo de verdad.",
  "El siguiente proyecto puede ser aún mejor."
];

boton.addEventListener("click", () => {
  const numero = Math.floor(Math.random() * frases.length);
  mensaje.textContent = frases[numero];
});
