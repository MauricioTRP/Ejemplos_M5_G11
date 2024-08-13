import { Reproductor } from "Reproductor";

let playMusica = new Reproductor("https://www.youtube.com/embed/YODCM26JXOY",musica);
playMusica.playMultimedia();
let playPelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",peliculas);
playPelicula.playMultimedia();
let playSerie = new Reproductor("https://www.youtube.com/embed/HhesaQXLuRY",series);
playSerie.playMultimedia();
playSerie.setInicio(200);