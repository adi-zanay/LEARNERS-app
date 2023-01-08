import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg4Page } from './pg4.page';

const routes: Routes = [
  {
    path: '',
    component: Pg4Page
  },
  {
    path: 'pg4det',
    loadChildren: () => import('./pg4det/pg4det.module').then( m => m.Pg4detPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg4PageRoutingModule {}
