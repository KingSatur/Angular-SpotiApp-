import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist:any = {}
  topTracks:any[] = []
  loading:boolean;

  constructor(private activated_router:ActivatedRoute, private spotifyService:SpotifyService) {
    this.activated_router.params.subscribe( params => {
      this.loading = true
      this.spotifyService.getArtistById(params['id']).subscribe(
        data => {
          this.artist = data
          this.loading = false
          this.getTopTracks(params['id'])
        }
      )
    })
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe(data => {
      console.log(data)
      this.topTracks = data
    })
  }

  ngOnInit() {
  }



}
