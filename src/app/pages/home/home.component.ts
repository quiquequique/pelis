import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener( 'window:scroll', ['$event'] )
  onScroll(): void {

    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300; // cubre navegadores viejos hacen lo mismo

    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight);

    // console.log( { pos, max } );

    if ( pos > max ) {

      // console.log( 'pedir mas peliculas ');

      if ( this.peliculasService.cargando ) { return; } // evita que dispare getcartelera multiples veces con el scroll

      this.peliculasService.getCartelera().subscribe( res => {

          this.movies.push( ...res.results );
      });

    }

  }

  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit( ): void {

    this.peliculasService.getCartelera()
      .subscribe( res => {

        // console.log( res.results );

        this.movies = res.results;
        this.moviesSlideshow = res.results;

      });


  }


  ngOnDestroy(): void {

    this.peliculasService.resetCarteleraPage();

  }

}
