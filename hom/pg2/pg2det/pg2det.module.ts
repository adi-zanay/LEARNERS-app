import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg2detPageRoutingModule } from './pg2det-routing.module';

import { Pg2detPage } from './pg2det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg2detPageRoutingModule
  ],
  declarations: [Pg2detPage]
})
export class Pg2detPageModule {}
