import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule, Router, Routes } from '@angular/router';

export const lazyRoutes: Routes= [{
  path: 'lazy-child', component: LazyComponent
}
]
@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule, RouterModule.forChild(lazyRoutes)
  ]
})
export class LazyModule { }
