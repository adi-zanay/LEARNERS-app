import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom2Page } from './hom2.page';

const routes: Routes = [
  {
    path: '',
    component: Hom2Page
  },
  {
    path: 'pgg2',
    loadChildren: () => import('./pgg2/pgg2.module').then( m => m.Pgg2PageModule)
  },
  {
    path: 'pgg3',
    loadChildren: () => import('./pgg3/pgg3.module').then( m => m.Pgg3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom2PageRoutingModule {}
