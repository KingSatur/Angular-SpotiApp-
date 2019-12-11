import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Esto significa que se podra inyectar en otros lugares
@Injectable({
  // Una forma automatica de importar servicios
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }

  getNewReleases(){

    // Dado que vamos a realizar una peticion que requiere headers, se deben agregar a la peticion

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQBOwTnLHH-SsIroDLPc9gNdyGOJJTSlUoNtVJtuR-VlJwPVjogHhGE8PKi95ylO8NlTFA7Qh51b8Q_ok8q7Is7fQs8MuCKiwuFE5rRu6Vsn29u1m5PWLMpCP5jpru4fVh2mxmZ93EMnBiR7RSQB0s3yGSv7TeMn4ZY"
    })


    this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers})
        .subscribe((data:any) => {
          console.log(data)
        })
        
  }



}



