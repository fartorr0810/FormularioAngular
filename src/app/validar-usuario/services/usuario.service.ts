import { Injectable } from "@angular/core";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import { ComentarioServicios } from "src/app/comentario-module/services/comentario.service";
import { ComentarioInterface } from "src/app/comentario-module/interfaces/comentario.interface";


@Injectable() export class UsuarioService{

  private esValido:boolean=false;
  private _listaUsuarios:UsuarioInterface[]=[
    {name:"PAKITO",
    password:"datossssss"},

    {name:"JUANKLERO",
    password:"JuanitoElGolondrina"}
  ];


  get lalistausuarios():UsuarioInterface[]{
    return [...this._listaUsuarios];
  }
  constructor(private serviciodecomentarios:ComentarioServicios){
    let listacomentarios=serviciodecomentarios.lalistacomentarios;
    console.log("Porfavor Funciona")
  }
  validar(listacomentarios:ComentarioInterface) {
    for (let index = 0; index < this._listaUsuarios.length; index++) {
      const usuario = this._listaUsuarios[index].name;
      console.log(listacomentarios);
    }
    return this.esValido;
  }

}
