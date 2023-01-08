import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg3detPageRoutingModule } from './pg3det-routing.module';

import { Pg3detPage } from './pg3det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg3detPageRoutingModule
  ],
  declarations: [Pg3detPage]
})
export class Pg3detPageModule {}
