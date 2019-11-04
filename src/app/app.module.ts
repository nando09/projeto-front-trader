import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AcademiaComponent } from './academia/academia.component';
import { HomeComponent } from './home/home.component';
import { PartidasEncerradasComponent } from './partidas-encerradas/partidas-encerradas.component';
import { PartidasAoVivoComponent } from './partidas-ao-vivo/partidas-ao-vivo.component';
import { PartidasProximasComponent } from './partidas-proximas/partidas-proximas.component';
import { BdcAoVivoComponent } from './bdc-ao-vivo/bdc-ao-vivo.component';
import { BdcNaoCadastradoComponent } from './bdc-nao-cadastrado/bdc-nao-cadastrado.component';
import { DashboardConquistasComponent } from './dashboard-conquistas/dashboard-conquistas.component';
import { DashboardCarreiraComponent } from './dashboard-carreira/dashboard-carreira.component';
import { DashboardCTComponent } from './dashboard-ct/dashboard-ct.component';
import { DashboardBancaComponent } from './dashboard-banca/dashboard-banca.component';
import { ProximosComponent } from './proximos/proximos.component';
import { OddsComponent } from './odds/odds.component';
import { HojeComponent } from './hoje/hoje.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    AcademiaComponent,
    HomeComponent,
    PartidasEncerradasComponent,
    PartidasAoVivoComponent,
    PartidasProximasComponent,
    BdcAoVivoComponent,
    BdcNaoCadastradoComponent,
    DashboardConquistasComponent,
    DashboardCarreiraComponent,
    DashboardCTComponent,
    DashboardBancaComponent,
    ProximosComponent,
    OddsComponent,
    HojeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
