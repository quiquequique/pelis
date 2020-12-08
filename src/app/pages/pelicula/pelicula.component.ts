import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { StarRatingComponent } from 'ng-starrating';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {

    // const movieId = this.activatedRoute.snapshot.params.id;
    const { id } = this.activatedRoute.snapshot.params; // con destructuring

    // console.log( id );

    // this.peliculasService.getDetallePelicula( id ).subscribe( res => {
    //   if ( !res ) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   // console.log( res );
    //   this.pelicula = res;
    // });
    // this.peliculasService.getCast( id ).subscribe( res => {
    //   // console.log( res );
    //   this.cast = res.filter( actor => actor.profile_path !== null); // filtra los que no tienen foto del arreglo
    // });

    combineLatest([ // uniendo observables en un subscribe

      this.peliculasService.getDetallePelicula( id ),
      this.peliculasService.getCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {

      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null );
    });

}

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}): any {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  regresar(): void {

    this.location.back();

  }


}
