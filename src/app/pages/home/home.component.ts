import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit( ): void {

    this.peliculasService.getCartelera()
      .subscribe( res => {

        // console.log( res.results );

        this.movies = res.results;

      });

  }

}
