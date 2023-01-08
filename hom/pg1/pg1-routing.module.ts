import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg1Page } from './pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Pg1Page
  },
  {
    path: 'pg1det',
    loadChildren: () => import('./pg1det/pg1det.module').then( m => m.Pg1detPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg1PageRoutingModule {}
