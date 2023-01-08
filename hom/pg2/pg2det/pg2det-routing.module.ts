import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg2detPage } from './pg2det.page';

const routes: Routes = [
  {
    path: '',
    component: Pg2detPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg2detPageRoutingModule {}
