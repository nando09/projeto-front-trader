import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcademiaComponent } from './academia/academia.component';
import { BdcAoVivoComponent } from './bdc-ao-vivo/bdc-ao-vivo.component';
import { BdcNaoCadastradoComponent } from './bdc-nao-cadastrado/bdc-nao-cadastrado.component';
import { DashboardBancaComponent } from './dashboard-banca/dashboard-banca.component';
import { DashboardCarreiraComponent } from './dashboard-carreira/dashboard-carreira.component';
import { DashboardConquistasComponent } from './dashboard-conquistas/dashboard-conquistas.component';
import { DashboardCTComponent } from './dashboard-ct/dashboard-ct.component';
import { HojeComponent } from './hoje/hoje.component';
import { OddsComponent } from './odds/odds.component';
import { PartidasAoVivoComponent } from './partidas-ao-vivo/partidas-ao-vivo.component';
import { PartidasEncerradasComponent } from './partidas-encerradas/partidas-encerradas.component';
import { PartidasProximasComponent } from './partidas-proximas/partidas-proximas.component';
import { ProximosComponent } from './proximos/proximos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MeusDadosComponent } from "./meus-dados/meus-dados.component";
import { EncerradosComponent } from "./encerrados/encerrados.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'academia/:moduloId/aula/:aulaId',
    component: AcademiaComponent,
  },
  {
    path: 'bdc-aovivo',
    component: BdcAoVivoComponent,
  },
  {
    path: 'bdc-nao-cadastrado',
    component: BdcNaoCadastradoComponent,
  },
  {
    path: 'dashboard/banca',
    component: DashboardBancaComponent,
  },
  {
    path: 'dashboard/carreira',
    component: DashboardCarreiraComponent,
  },
  {
    path: 'dashboard/conquistas',
    component: DashboardConquistasComponent,
  },
  {
    path: 'dashboard/ct',
    component: DashboardCTComponent,
  },
  {
    path: 'hoje',
    component: HojeComponent,
  },
  {
    path: 'odds',
    component: OddsComponent,
  },
  {
    path: 'partidas/ao-vivo',
    component: PartidasAoVivoComponent,
  },
  {
    path: 'partidas/encerradas',
    component: PartidasEncerradasComponent,
  },
  {
    path: 'partidas/proximas',
    component: PartidasProximasComponent,
  },
  {
    path: 'proximos',
    component: ProximosComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'meus-dados',
    component: MeusDadosComponent,
  },
  {
    path: 'encerrados',
    component: EncerradosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
