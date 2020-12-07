import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ]
})
export class ComponentsModule { }
