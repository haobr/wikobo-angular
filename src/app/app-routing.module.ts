import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisteryComponent } from './core/registery/registery.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InserUpdateTruyenComponent } from './modules/inser-update-truyen/inser-update-truyen.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registery', component: RegisteryComponent},
  {path: 'viet-truyen', component: InserUpdateTruyenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
