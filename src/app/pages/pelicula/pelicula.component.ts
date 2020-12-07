import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    // const movieId = this.activatedRoute.snapshot.params.id;
    const { id } = this.activatedRoute.snapshot.params; // con destructuring

    console.log( id );

    this.peliculasService.getDetallePelicula( id ).subscribe( res => {

      console.log( res );

    });


  }

}
