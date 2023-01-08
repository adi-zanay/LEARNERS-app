import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg4detPage } from './pg4det.page';

const routes: Routes = [
  {
    path: '',
    component: Pg4detPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg4detPageRoutingModule {}
