import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg4detPageRoutingModule } from './pg4det-routing.module';

import { Pg4detPage } from './pg4det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg4detPageRoutingModule
  ],
  declarations: [Pg4detPage]
})
export class Pg4detPageModule {}
