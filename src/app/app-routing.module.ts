import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPlatComponent } from './pages/ajouter-plat/ajouter-plat.component';
import { CarteComponent } from './pages/carte/carte.component';
import { EditPlatComponent } from './pages/edit-plat/edit-plat.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlatComponent } from './pages/plat/plat.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'plat/:id', component: PlatComponent},
  {path: 'ajouter-plat', component: AjouterPlatComponent},
  {path: 'edit-plat/:id', component: EditPlatComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
