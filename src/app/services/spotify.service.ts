import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Esto significa que se podra inyectar en otros lugares
@Injectable({
  // Una forma automatica de importar servicios
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }

  getQuery(query:string){


    const URL = `https://api.spotify.com/v1/${query}`
  

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQB7rtP5QqJ6Gg5WL-XyVnM0sPq-09yOd_skJ_XzQIBaHiH_AScLE44JI3nzVKWpMiZGjzPyfuMzoaqi5q8"
    })

    return this.http.get(URL, {headers})
  } 

  getNewReleases(){

    // Dado que vamos a realizar una peticion que requiere headers, se deben agregar a la peticion

    // const headers = new HttpHeaders({
    //   "Authorization": "Bearer BQB2CARW6AgbH1h0k7qQEhCI8dXeiel8JVLDTB-qfFU4j2NLlUaDMIO5z9YHJep4NH7sDA67beYn4ZHD18k"
    // })

    return this.getQuery(`browse/new-releases?limit=20`) 
        .pipe(map(data => data["albums"].items))
        
  }

  getSetArtists(word:string){
    
    return this.getQuery(`search?q=${word}&type=artist&limit=15`)
          .pipe(map(data => data["artists"].items))
          
  }

  getArtistById(id:string){

    return this.getQuery(`artists/${id}`)

  } 

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe(map(data => data['tracks']))
  }


}



