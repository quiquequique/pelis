import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CarteleraResponce, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;


  constructor( private http: HttpClient ) { }

  get params(): any {

    return {
      api_key: '4653ad8ed2946de5c1534d83b792bc5f',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    };

  }

  // query original = https://api.themoviedb.org/3/movie/now_playing?api_key=4653ad8ed2946de5c1534d83b792bc5f&language=es-ES&page=1
  // se convierte en params.

  getCartelera(): Observable<CarteleraResponce> {


    if ( this.cargando ) { return; } // frena carga multiple de pelis

    this.cargando = true;

    console.log( 'llamado a API' );

    return this.http.get<CarteleraResponce>(`${ this.baseUrl }/movie/now_playing`, {

      params: this.params

    }).pipe(
      tap( () => {

      this.carteleraPage += 1;
      this.cargando = false;

    }));
  }
  // https://api.themoviedb.org/3/search/movie?api_key=4653ad8ed2946de5c1534d83b792bc5f&language=es-Es&query=lola&page=1&include_adult=false

  buscarPeliculas( texto: string ): Observable<Movie[]> {

    const params = { ...this.params, page: '1', query: texto, include_adult: true};

    return this.http.get<CarteleraResponce>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map (res => res.results )
    );

  }

  resetCarteleraPage(): void {
    this.carteleraPage = 1;
  }

  getDetallePelicula( id: string ): any {

    return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${ id }`, { params: this.params });

  }

}
