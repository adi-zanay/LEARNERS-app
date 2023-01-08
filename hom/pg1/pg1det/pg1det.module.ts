import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg1detPageRoutingModule } from './pg1det-routing.module';

import { Pg1detPage } from './pg1det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg1detPageRoutingModule
  ],
  declarations: [Pg1detPage]
})
export class Pg1detPageModule {}
