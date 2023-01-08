import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pggg1Page } from './pggg1.page';

const routes: Routes = [
  {
    path: '',
    component: Pggg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pggg1PageRoutingModule {}
