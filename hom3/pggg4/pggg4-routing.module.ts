import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pggg4Page } from './pggg4.page';

const routes: Routes = [
  {
    path: '',
    component: Pggg4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pggg4PageRoutingModule {}
