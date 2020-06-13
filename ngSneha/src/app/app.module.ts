import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';

@NgModule({
  declarations: [AppComponent, SqrtPipe, FooterComponent, BannerThreeComponent, ContactUsComponent, BannerTwoComponent, ProductsComponent, BannerOneComponent, NavComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule{} 