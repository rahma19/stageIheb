import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeTachesComponent } from './admin/liste-taches/liste-taches.component';
import { PublierTacheComponent } from './admin/publier-tache/publier-tache.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErreurComponent } from './erreur/erreur.component';
import { TacheComponent } from './user/tache/tache.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'listeTache',component:ListeTachesComponent},
  {path:'postTache',component:PublierTacheComponent},
  {path:'tache',component:TacheComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
