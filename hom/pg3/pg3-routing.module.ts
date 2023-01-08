import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg3Page } from './pg3.page';

const routes: Routes = [
  {
    path: '',
    component: Pg3Page
  },
  {
    path: 'pg3det',
    loadChildren: () => import('./pg3det/pg3det.module').then( m => m.Pg3detPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg3PageRoutingModule {}
