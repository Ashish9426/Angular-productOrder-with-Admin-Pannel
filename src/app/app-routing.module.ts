import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { AuthoGuard } from './authentication/autho.guard';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component';
import { OrderNowComponent } from './components/pages/order-now/order-now.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServicesComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent, children:[
      {path:'order-menu', component:OrderMenuComponent},
      {path:'order-now', component:OrderNowComponent},
  ],canActivate:[AuthoGuard]},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
