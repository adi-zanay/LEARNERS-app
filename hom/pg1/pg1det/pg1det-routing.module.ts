import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg1detPage } from './pg1det.page';

const routes: Routes = [
  {
    path: '',
    component: Pg1detPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg1detPageRoutingModule {}
