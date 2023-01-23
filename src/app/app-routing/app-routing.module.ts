import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';
import { PaginaComParametrosComponent } from '../pagina-com-parametros/pagina-com-parametros.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from '../pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';


const routes: Routes = [
  { path : "primeira-pagina", component:  PrimeiraPaginaComponent},
  { path : "segunda-pagina", component: SegundaPaginaComponent},
  { path : "", redirectTo: "primeira-pagina", pathMatch : "full"},
  { path : "pagina-com-paramentros/:id", component: PaginaComParametrosComponent },
  { path : "**", component: PaginaNaoEncontradaComponent}, 
  { path : 'lazy-loading'},
  { path : "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
  { path : "login", component: LoginComponent},
  
  ]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
