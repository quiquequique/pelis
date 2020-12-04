import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BusquedaComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
