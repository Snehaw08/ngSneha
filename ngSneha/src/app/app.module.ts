import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase-config';

import { AppRoutingModule } from './modules/app-routing.module';
import { AllComponentsModule } from './modules/allcomponents/all-components.module';
import { LazyModule } from './modules/lazy/lazy.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './modules/all-material.module';

import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';

import { CarDetailsComponent } from './products/car-details/car-details.component';
import { BikeComponent } from './products/bike/bike.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { HyundaiComponent } from './products/car-details/hyundai/hyundai.component';
import { HondaComponent } from './products/car-details/honda/honda.component';
import { CarNavComponent } from './products/car-details/car-nav/car-nav.component';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './admin/user/user.component';

import { ComServ } from './services/com-serv.service';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

import { SqrtPipe } from './pipes/sqrt.pipe';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { HostDirective } from './directives/host.directive';
import { BikedetailComponent } from './products/bike/bikedetail/bikedetail.component';
import { BikeofferComponent } from './products/bike/bikeoffer/bikeoffer.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactComponent } from './forms/react/react.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CustomComponent } from './forms/custom/custom.component';
import { HttpPostsComponent } from './components/http-posts/http-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirective,
    CarDetailsComponent,
    BikeComponent,
    PageNotFoundComponent,
    HyundaiComponent,
    HondaComponent,
    CarNavComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    UserComponent,
    HostDirective,
    BikedetailComponent,
    BikeofferComponent,
    TemplateComponent,
    ReactComponent,
    ParentComponent,
    ChildComponent,
    CustomComponent,
    HttpPostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AllComponentsModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    HttpModule,
    LazyModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [HttpPostsComponent],
  providers: [ComServ, AuthGuard, RoleGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [AllMaterialModule],
})
export class AppModule {}
