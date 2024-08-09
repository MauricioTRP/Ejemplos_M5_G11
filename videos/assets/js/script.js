let IIFE = (()=> {
  let setVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url)
  }

  return {setVideo}
})()

class Multimedia {
  #url
  constructor(url) {
    this.#url = url
  }

  get url() {
    return this.#url
  }

  setInicio() {
    return 'Este método es para realizar un cambio en la URL del video'
  }
}

class Reproductor extends Multimedia {
  #id
  constructor(url, id) {
    super(url)
    this.#id = id
  }

  playMultimedia() {
    IIFE.setVideo(this.url ,this.#id)
  }

  setInicio(seg) {
    // &amp;start=${tiempo}
    let nuevoUrl = `${this.url}&amp;start=${seg}`
    IIFE.setVideo(nuevoUrl, this.#id);
  }
}

const serie = new Reproductor("https://www.youtube.com/embed/_1qGhChKL8s?si=lxwFudBITT0k0znT", "series")
const pelicula = new Reproductor("https://www.youtube.com/embed/OVDhmpHiZWU?si=hNKGPi3dftI7emAq", "peliculas")
const musica = new Reproductor("https://www.youtube.com/embed/9hdVzYi1prc?si=de20kL44RPscHrgJ", "musica")

musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

pelicula.setInicio(30)