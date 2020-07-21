import { CustomComponent } from './../forms/custom/custom.component';
import { TemplateComponent } from './../forms/template/template.component';
import { AllMaterialModule } from './all-material.module';
import { HondaComponent } from './../products/car-details/honda/honda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from '../products/car-details/car-details.component';
import { BikeComponent } from '../products/bike/bike.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';
import { HyundaiComponent } from '../products/car-details/hyundai/hyundai.component';
import { CarNavComponent } from '../products/car-details/car-nav/car-nav.component';
import { HomeComponent } from '../layouts/home/home.component';
import { LoginComponent } from '../admin/login/login.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from '../admin/admin/admin.component';
import { UserComponent } from '../admin/user/user.component';
import { RoleGuard } from '../guards/role.guard';
import { BikedetailComponent } from '../products/bike/bikedetail/bikedetail.component';
import { BikeofferComponent } from '../products/bike/bikeoffer/bikeoffer.component';
import { ReactComponent } from '../forms/react/react.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'temp', component: TemplateComponent },
  { path: 'react', component: ReactComponent },
  { path: 'custom', component: CustomComponent },

  {
    path: 'cardet',
    component: CarNavComponent,
    children: [
      { path: '', component: CarDetailsComponent },
      { path: 'hyundai', component: HyundaiComponent },
      { path: 'honda', component: HondaComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'user', canActivate: [RoleGuard], component: UserComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'bike',
    component: BikeComponent,
  },
  {
    path: 'bikedetail',
    component: BikedetailComponent,outlet:"outlet1"
  },
  {
    path: 'bikeoffer',
    component: BikeofferComponent, outlet: "outlet2"
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule,AllMaterialModule],
})
export class AppRoutingModule {}
