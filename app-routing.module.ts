import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hom',
    pathMatch: 'full'
  },
  {
    path: 'hom',
    children: [
      {
        path: '',
        loadChildren: () => import('./hom/hom.module').then(m => m.HomPageModule)
      },
      {
        path: 'pg1',
        children: [
          {
            path: '',
            loadChildren: () => import ('./hom/pg1/pg1.module').then(m => m.Pg1PageModule)
          },
          {
            path: ':pgid',
            loadChildren: () => import('./hom/pg1/pg1det/pg1det.module').then(m => m.Pg1detPageModule)
          }
        ]
      },
      {
        path: 'pg2',
        children: [
          {
            path: '',
            loadChildren: () => import('./hom/pg2/pg2.module').then(m => m.Pg2PageModule)
          },
          {
            path: ':pgid',
            loadChildren: () => import('./hom/pg2/pg2det/pg2det.module').then(m => m.Pg2detPageModule)
          }
        ]
      },
      {
        path: 'pg3',
        children: [
          {
            path: '',
            loadChildren: () => import('./hom/pg3/pg3.module').then(m => m.Pg3PageModule)
          },
          {
            path: ':pgid',
            loadChildren: () => import('./hom/pg3/pg3det/pg3det.module').then(m => m.Pg3detPageModule)
          }
        ]
      },
      {
        path: ':pg4',
        children: [
          {
            path: '',
            loadChildren: () => import('./hom/pg4/pg4.module').then(m => m.Pg4PageModule)
          },
          {
            path: ':pgid',
            loadChildren: () => import('./hom/pg4/pg4det/pg4det.module').then(m => m.Pg4detPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'hom2',
    children: [
      {
        path: '',
        loadChildren: () => import('./hom2/hom2.module').then( m => m.Hom2PageModule)
      },
      {
        path: ':pgeid',
        loadChildren: () => import('./hom2/pgg2/pgg2.module').then(m => m.Pgg2PageModule)
      },
      {
        path: ':pgeid',
        loadChildren: () => import('./hom2/pgg3/pgg3.module').then(m => m.Pgg3PageModule)
      }
    ]
  },
  {
    path: 'hom3',
    children: [
      {
        path: '',
        loadChildren: () => import('./hom3/hom3.module').then( m => m.Hom3PageModule)
      },
      {
        path: ':pgeid',
        loadChildren: () => import('./hom3/pggg1/pggg1.module').then(m => m.Pggg1PageModule)
      },
      {
        path: ':pgeid',
        loadChildren: () => import('./hom3/pggg4/pggg4.module').then(m => m.Pggg4PageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
