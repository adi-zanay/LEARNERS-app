import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomPage } from './hom.page';

const routes: Routes = [
  {
    path: '',
    component: HomPage
  },
  {
    path: 'pg1',
    loadChildren: () => import('./pg1/pg1.module').then(m=>m.Pg1PageModule)
  },
  {
    path: 'pg2',
    loadChildren: () => import('./pg2/pg2.module').then( m => m.Pg2PageModule)
  },
  {
    path: 'pg3',
    loadChildren: () => import('./pg3/pg3.module').then( m => m.Pg3PageModule)
  },
  {
    path: 'pg4',
    loadChildren: () => import('./pg4/pg4.module').then( m => m.Pg4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomPageRoutingModule {}
