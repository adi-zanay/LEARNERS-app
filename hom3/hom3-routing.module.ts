import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom3Page } from './hom3.page';

const routes: Routes = [
  {
    path: '',
    component: Hom3Page
  },
  {
    path: 'pggg1',
    loadChildren: () => import('./pggg1/pggg1.module').then( m => m.Pggg1PageModule)
  },
  {
    path: 'pggg4',
    loadChildren: () => import('./pggg4/pggg4.module').then( m => m.Pggg4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom3PageRoutingModule {}
