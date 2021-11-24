import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarcomentarioComponent } from './agregarcomentario/agregarcomentario.component';
import { FormsModule } from '@angular/forms';
import { ListarcomentariosComponent } from './listarcomentarios/listarcomentarios.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AgregarcomentarioComponent,
    ListarcomentariosComponent
  ],

  exports:[
    MainPageComponent,
    AgregarcomentarioComponent
  ],imports: [
    CommonModule,
    FormsModule
  ],
})
export class ComentarioModuleModule { }
