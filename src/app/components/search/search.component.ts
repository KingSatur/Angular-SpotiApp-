import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[] = []
  loading:boolean;

  constructor(private spotifyService:SpotifyService) {
    this.loading = false
  }

  ngOnInit() {
  }

  search(word:string){
    this.spotifyService.getSetArtists(word).subscribe((data:any) =>{
      this.loading = true
      this.artists = data
      this.loading = false
    })
  }

}
