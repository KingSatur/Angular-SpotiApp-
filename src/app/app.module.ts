import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

// Importando rutas
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {ROUTES} from './app.route'
import { SpotifyService } from './services/spotify.service';
import { NotimagePipe } from './pipes/notimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NotimagePipe,
    CardComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
