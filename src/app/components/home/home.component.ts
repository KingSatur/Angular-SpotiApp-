import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises: any[] = []
  newReleases: any[] = []
  loading:boolean;
  error:boolean;
  errorMessage:string;


  constructor( private spotifyService:SpotifyService) {
    // Para realizar una peticion http se hace lo siguiente
    // this.http.get("https://restcountries.eu/rest/v2/lang/es")
    //     .subscribe( (data:any) => {
    //       this.paises = data
    //       console.log()
    //     })
    this.loading = true
    this.error = false

    this.spotifyService.getNewReleases().subscribe(
      (data:any) => {
        this.newReleases = data
        this.loading = false
      }, (errorService) => {
        this.error = true
        this.errorMessage = errorService.error.error.message
      }
    )
  }

  ngOnInit() {
  }

}
