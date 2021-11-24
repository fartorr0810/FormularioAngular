import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComentarioModuleModule } from './comentario-module/comentario-module.module';
import { ComentarioServicios } from './comentario-module/services/comentario.service';
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    ComentarioModuleModule,
    FormsModule
  ],
  providers: [ComentarioServicios],
  bootstrap: [AppComponent]
})
export class AppModule { }
