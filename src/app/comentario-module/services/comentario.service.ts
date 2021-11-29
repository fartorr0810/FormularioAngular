import { Injectable } from "@angular/core";
import { ComentarioInterface } from "../interfaces/comentario.interface";
import { UsuarioService } from "src/app/validar-usuario/services/usuario.service";


@Injectable() export class ComentarioServicios{
  private _listacomentarios:ComentarioInterface[]=[];


  get lalistacomentarios():ComentarioInterface[]{
    return [...this._listacomentarios];
  }
  constructor(){
    console.log("Validacion Activada")
  }
  agregarComentario(nuevocomentario: ComentarioInterface) {
    this._listacomentarios.push(nuevocomentario);
  }


}
