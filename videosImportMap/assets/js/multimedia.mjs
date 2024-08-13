import iifeGlobal from "./iife.mjs";

class Multimedia {
  constructor(url){
      this.url = url
  };

  setInicio(){
      return `Este método es para realizar un cambio en la URL del video`
  };
};

class Reproductor extends Multimedia {
  constructor(url,id){
      super(url);
      this.id = id
  };
  playMultimedia(){
      iifeGlobal.mostrarTodo(this.url,this.id);
  };
  setInicio(tiempo){
      this.id.setAttribute('src',`${this.url}?start=${tiempo}`) 
  };
};

export  {Multimedia, Reproductor}