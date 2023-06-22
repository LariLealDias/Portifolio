import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HabilidadesComponent,
    HeaderComponent,
    HomeComponent,
    ProjetosComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
