import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pgg3Page } from './pgg3.page';

const routes: Routes = [
  {
    path: '',
    component: Pgg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pgg3PageRoutingModule {}
