import { Component, Input, OnInit } from '@angular/core';
import { ComentarioInterface } from '../interfaces/comentario.interface';
import { ComentarioServicios } from '../services/comentario.service';
import { UsuarioService } from 'src/app/validar-usuario/services/usuario.service';
@Component({
  selector: 'app-agregarcomentario',
  templateUrl: './agregarcomentario.component.html',
  styleUrls: ['./agregarcomentario.component.css']
})

export class AgregarcomentarioComponent implements OnInit {

  constructor(private serviciodecomentarios:ComentarioServicios,private serviciodevalidacion:UsuarioService) {
    let fechaactual: Object = new Date();
    fechaactual=Date.now();
    }
    ngOnInit(): void {
    }
  fechaactual: Date = new Date();
  @Input() nuevocomentario:ComentarioInterface={name:"",comment:"",fecha:this.fechaactual}

  agregar(){
    if (this.serviciodevalidacion.validar(this.nuevocomentario)){
      console.log("Prueba");
    }
    this.serviciodecomentarios.agregarComentario(this.nuevocomentario
      );
    this.nuevocomentario={
      name:"",comment:"",fecha:this.fechaactual
    }

  }
}
