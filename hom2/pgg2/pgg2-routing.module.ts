import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pgg2Page } from './pgg2.page';

const routes: Routes = [
  {
    path: '',
    component: Pgg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pgg2PageRoutingModule {}
