import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [AppComponent, SqrtPipe],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule{} 