import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponce } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getCartelera(): Observable<CarteleraResponce> {

    return this.http.get<CarteleraResponce>('https://api.themoviedb.org/3/movie/now_playing?api_key=4653ad8ed2946de5c1534d83b792bc5f&language=es-ES&page=1');
  }
}
