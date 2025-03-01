function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imaagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './Avatatr lifht.png')
    img.setAttribute(
      "alt",
      "Foto de Dário Varela segurando um microfone, de terno, com um relógio ouro rosê e óculos, fundo com jogo de luzes azul"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./Avatar Certo.png")
    img.setAttribute(
      'alt',
      'Foto de Dário Varela segurando um microfone, de terno, com um relógio ouro rosê e óculos, fundo com jogo de luzes e alguns galhos'
    )
  }






}