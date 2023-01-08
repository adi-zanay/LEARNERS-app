import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg3detPage } from './pg3det.page';

const routes: Routes = [
  {
    path: '',
    component: Pg3detPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg3detPageRoutingModule {}
