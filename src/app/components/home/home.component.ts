import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = []


  constructor( private spotifyService:SpotifyService) {
    // Para realizar una peticion http se hace lo siguiente
    // this.http.get("https://restcountries.eu/rest/v2/lang/es")
    //     .subscribe( (data:any) => {
    //       this.paises = data
    //       console.log()
    //     })
    this.spotifyService.getNewReleases();
  }

  ngOnInit() {
  }

}
