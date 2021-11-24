import { Component, OnInit } from '@angular/core';
import { ComentarioInterface } from '../interfaces/comentario.interface';
import { ComentarioServicios } from '../services/comentario.service';
@Component({
  selector: 'app-listarcomentarios',
  templateUrl: './listarcomentarios.component.html',
  styleUrls: ['./listarcomentarios.component.css']
})
export class ListarcomentariosComponent implements OnInit {

get listadecomentarios():ComentarioInterface[]{
  return this.serviciodecomentarios.lalistacomentarios;
}
  constructor(private serviciodecomentarios:ComentarioServicios
  ) { }

  ngOnInit(): void {
  }
}
