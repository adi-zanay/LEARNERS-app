import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg2Page } from './pg2.page';

const routes: Routes = [
  {
    path: '',
    component: Pg2Page
  },
  {
    path: 'pg2det',
    loadChildren: () => import('./pg2det/pg2det.module').then( m => m.Pg2detPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg2PageRoutingModule {}
