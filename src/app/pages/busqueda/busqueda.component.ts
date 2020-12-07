import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public movies: Movie[] = [];

  public busqueda = '';

  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.busqueda = params.texto;

      this.peliculasService.buscarPeliculas( params.texto ).subscribe( res => {

        this.movies = res;

        console.log( res );

      });

    });

  }

}
