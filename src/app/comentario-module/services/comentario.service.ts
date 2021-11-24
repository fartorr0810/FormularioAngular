import { Injectable } from "@angular/core";
import { ComentarioInterface } from "../interfaces/comentario.interface";



@Injectable() export class ComentarioServicios{
  private _listacomentarios:ComentarioInterface[]=[];


  get lalistacomentarios():ComentarioInterface[]{
    return [...this._listacomentarios];
  }
  constructor(){
    console.log("Porfavor Funciona")
  }
  agregarComentario(nuevocomentario: ComentarioInterface) {
    this._listacomentarios.push(nuevocomentario);
  }


}
